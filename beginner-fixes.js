/* Beginner feedback and draft preservation. No data is sent off-device. */
(function () {
  'use strict';
  var attempts = [];
  var drafts = {};
  try { drafts = JSON.parse(sessionStorage.getItem('ielts-p3-drafts') || '{}'); } catch (_) {}
  function key() { return (PCUR ? PCUR.t : '') + '::' + P3MODE; }
  function saveDraft() {
    if (!PCUR || !PG || PG.part !== 'p3') return;
    var values = Object.assign({}, drafts[key()] || {});
    document.querySelectorAll('#trainBox textarea, #trainBox select').forEach(function (el) { if (el.id) values[el.id] = el.value; });
    values.scores = Object.assign({}, P3SCORES);
    drafts[key()] = values;
    try { sessionStorage.setItem('ielts-p3-drafts', JSON.stringify(drafts)); } catch (_) {}
  }
  function restoreDraft() {
    var values = drafts[key()] || {};
    document.querySelectorAll('#trainBox textarea, #trainBox select').forEach(function (el) { if (Object.prototype.hasOwnProperty.call(values, el.id)) el.value = values[el.id]; });
    if (values.scores) P3SCORES = Object.assign({}, values.scores);
    document.querySelectorAll('.p3ScoreBtn').forEach(function (el) { el.classList.toggle('on', Number(el.dataset.score) === P3SCORES[el.dataset.dim]); });
    var total = document.getElementById('p3scoreTotal');
    if (total) total.textContent = '自评总分：' + Object.values(P3SCORES).reduce(function (a, b) { return a + b; }, 0) + ' / 10';
    if (P3REC.url) {
      var audio = document.getElementById('p3audio'), download = document.getElementById('p3download');
      if (audio) audio.src = P3REC.url;
      if (download) { download.href = P3REC.url; download.download = 'part3-answer.webm'; download.style.display = 'block'; }
    }
  }
  document.getElementById('list').addEventListener('input', saveDraft);
  document.getElementById('list').addEventListener('change', saveDraft);

  P3_CLASSIFICATIONS.unshift({id:'studentTraits',label:'按学生的特点和行为分类：友善助人 / 擅长运动 / 幽默开朗',skeleton:'Students who help classmates ... Those who are good at sports ... Both can ...',words:['help classmates','include others','good at sports','a sense of humour','easy to get along with']});
  var oldClassification = p3ClassificationFor;
  p3ClassificationFor = function (q, structure) {
    if (/what (kinds|types) of students.*popular.*school/i.test(q)) return 'studentTraits';
    if (/^(what|which) (kinds|types|sorts) of (students|teachers|people|children|parents|doctors|nurses)\b/i.test(q)) return 'type';
    return oldClassification(q, structure);
  };
  var oldAdvice = p3ClassificationAdviceHtml;
  p3ClassificationAdviceHtml = function (q) {
    if (p3ClassificationFor(q, p3StructureFor(q)) === 'studentTraits') return '<div class="p3Advice"><b>分类建议</b> 题目限定了在校学生。选两类学生，分别说明他们的特点或行为为什么让同学愿意接近他们。</div>';
    return oldAdvice(q);
  };
  var oldIdea = p3IdeaHtml;
  p3IdeaHtml = function (id, q) {
    if (id === 'studentTraits') return '<div class="p3IdeaList">友善助人：帮助同学、邀请别人加入活动。<br>擅长运动：在比赛或团队活动中受到关注。<br>幽默开朗：让同学感到轻松，容易相处。</div>';
    return oldIdea(id, q);
  };
  var oldReference = p3RefContent;
  p3RefContent = function (st, cl, ans) {
    if (p3ClassificationFor(PCUR.t, p3StructureFor(PCUR.t)) === 'studentTraits') {
      return '<div class="p3Kit"><b>示范思路：学生特点 → 行为 → 原因</b><div class="p3Skeleton">Friendly students are often popular because they help classmates and include others in group activities. Students who are good at sports may also attract attention through school competitions. In both cases, being approachable helps them build friendships.</div><div>选其中两类，用自己的学校经历补一个例子。其他扣题的分类也可以。</div></div>';
    }
    return oldReference(st, cl, ans);
  };
  var oldOptions = p3OptionsHtml;
  p3OptionsHtml = function (list, correct, kind) {
    if (kind === 'classification' && correct === 'studentTraits') list = list.filter(function (x) { return ['studentTraits', 'type', 'method'].indexOf(x.id) >= 0; });
    return oldOptions(list, correct, kind);
  };
  var oldRenderP3 = renderP3Step;
  renderP3Step = function () {
    oldRenderP3();
    if (P3MODE === 'semi' && p3ClassificationFor(PCUR.t, p3StructureFor(PCUR.t)) === 'studentTraits') {
      var select = document.getElementById('p3SemiClass');
      Array.from(select.options).forEach(function (option) { if (['studentTraits', 'type', 'method'].indexOf(option.value) < 0) option.remove(); });
    }
    restoreDraft();
  };
  p3SetMode = function (mode) {
    saveDraft();
    if (P3REC.recorder && P3REC.recorder.state === 'recording') P3REC.recorder.stop();
    P3MODE = mode;
    renderP3Step();
  };
  var oldToolkit = p3RenderToolkit;
  p3RenderToolkit = function () { oldToolkit(); restoreDraft(); };
  var oldScore = p3SetScore;
  p3SetScore = function (button) { oldScore(button); saveDraft(); };
  var oldScoreHtml = p3ScoreHtml;
  p3ScoreHtml = function () { return '<p class="p3Kit">每项：0 = 还没做到；1 = 提示后做到或有遗漏；2 = 独立做到。用于本次练习自查。</p>' + oldScoreHtml(); };

  var oldTrain = trainItemForQuestion;
  trainItemForQuestion = function (q) {
    var item = oldTrain(q);
    if (!item || q !== 'What would you do if you feel bored?') return item;
    return Object.assign({}, item, {
      frame:'I usually ...',frameAccepted:['I usually ...','I would ...'],frameOptions:['I usually ...','I would ...','I used to ...','I prefer ...'],
      reason:'message my friends',reasonAccepted:['message my friends'],reasonOptions:['message my friends','my friends','my feelings'],
      expansion:'because chatting with them relieves my boredom',expansionAccepted:['because chatting with them relieves my boredom'],expansionOptions:['because chatting with them relieves my boredom','all the things','a very active person'],
      chunks:['message my friends','have a chat','relieve my boredom'],
      model:'If I felt bored, I would message my friends and have a chat. Talking to them usually helps me relax and relieves my boredom.',modelAudio:''
    });
  };
  var oldTrainStep = renderTrainStep;
  renderTrainStep = function () {
    oldTrainStep();
    if (PCUR.t === 'What would you do if you feel bored?') {
      document.querySelector('#trainBox .trainBoxTitle').textContent = '第二步：选择回答“会做什么”的开头';
      document.querySelector('#compactReasonBox .trainStep').textContent = '第三步：选择具体行动';
      document.querySelector('#compactReasonBox .trainFeedback').textContent = '选一个能接在开头后面的行动词组。';
      document.querySelector('#compactExplainBox .trainStep').textContent = '第四步：说明这样做的原因';
    }
  };
  var oldTrainChoose = trainChoose;
  trainChoose = function (button) {
    oldTrainChoose(button);
    if (button.dataset.answer !== '1' && button.dataset.kind === 'frame') document.getElementById('trainFb-frame').textContent = '本练习先用能直接回应题目的开头；完整回答也可以有其他表达。再看一次题目问的动作或态度。';
    var finish = document.getElementById('compactFinish');
    if (finish && finish.style.display === 'block') {
      var model = document.getElementById('compactModel');
      if (model) model.classList.add('on');
    }
  };
  var oldStart = startGroup;
  startGroup = function (index) { attempts = []; oldStart(index); };
  var oldChoose = choose;
  choose = function (button) {
    if (PLOCK) return;
    var correct = button.textContent === label(PCUR);
    attempts.push({line:PCUR,correct:correct});
    oldChoose(button);
    if (!correct) {
      var fb = document.getElementById('fb');
      fb.textContent = '这次没选对。原句：' + PCUR.t + (PCUR.zh ? '；意思：' + PCUR.zh : '') + '。重听时注意开头的疑问词和题目问的动作。';
      var help = document.createElement('button'); help.className = 'nextbtn'; help.id = 'learnWrong'; help.textContent = '看着原句重听，再练回答';
      help.onclick = function () { play(document.getElementById('replay'), PCUR.a); renderTrainStep(); help.remove(); };
      fb.appendChild(help);
    }
  };
  var oldDone = renderDone;
  renderDone = function () {
    oldDone();
    var missed = attempts.filter(function (x) { return !x.correct; });
    if (!missed.length) return;
    var panel = document.createElement('div'); panel.className = 'card'; panel.style.display = 'block';
    panel.innerHTML = '<b>本次需要重听的题目</b>' + missed.map(function (x) { return '<p style="margin:8px 0">' + esc(x.line.t) + '<br>' + esc(x.line.zh || '') + '</p>'; }).join('');
    var retry = document.createElement('button'); retry.className = 'nextbtn'; retry.textContent = '只练错题';
    retry.onclick = function () { PITEM = missed.map(function (x) { return x.line; }); attempts = []; PIDX = 0; PSCORE = 0; renderQ(); };
    panel.appendChild(retry); document.getElementById('list').appendChild(panel);
  };
})();
