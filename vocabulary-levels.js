/* Topic terminology and authored B2/C1 speaking extensions. Levels are learning tracks. */
(function () {
  'use strict';
  var data = {}, key;
  var source = `
@Feeling bored
T|a daily routine|日常惯例|A daily routine can become boring if it never changes.
T|a repetitive task|重复性的任务|Sorting the same files is a repetitive task.
B2|lose interest in something|对某事失去兴趣|I lose interest in tasks that do not challenge me.|interest
B2|break the routine|打破惯例|Trying a new hobby helps me break the routine.|relaxation
C1|feel mentally unstimulated|觉得缺少思维上的刺激|I feel mentally unstimulated when a task requires no thought.|health
C1|slip into a monotonous routine|陷入单调的惯例|People can slip into a monotonous routine without noticing.|weakness
@Names
T|a given name / a surname|名字／姓氏|My given name is quite common, but my surname is unusual.
T|a nickname|昵称|My friends use a nickname that I had at school.
B2|associate a name with a face|把名字和面孔联系起来|I associate a name with a face to remember it.|education
B2|carry a special meaning|承载特别的含义|My name carries a special meaning for my parents.|sentimental
C1|reflect a family's cultural heritage|反映家庭的文化传承|A traditional name can reflect a family's cultural heritage.|sentimental
C1|be prone to forgetting names|容易忘记名字|I am prone to forgetting names when I meet several people at once.|weakness
@Friends
T|a close-knit group|关系紧密的群体|I belong to a close-knit group of school friends.
T|a childhood friend|童年朋友|My childhood friend knows my family well.
B2|maintain a long-distance friendship|维持异地友谊|We maintain our long-distance friendship through weekly calls.|communication
B2|offer emotional support|提供情感支持|Close friends offer emotional support during difficult times.|sentimental
C1|confide in someone|向某人倾诉私密心事|I can confide in my best friend without feeling judged.|communication
C1|form a lasting bond|建立持久的纽带|Shared experiences can help people form a lasting bond.|sentimental
@Advertisements
T|splash ads (splash-screen / app-open ads)|开屏广告：打开 App 时出现；app-open ads 是平台常用名称|I often see app-open ads before I can use an app.
T|pop-up ads|弹窗广告：覆盖当前页面的小窗口广告|Pop-up ads interrupt me when I am reading online.
T|banner ads|横幅广告：网页顶部或侧面的广告条|I rarely click on banner ads at the top of a webpage.
T|billboards|大型户外广告牌|There are several billboards beside the main road.
T|video ads / pre-roll ads|视频广告／正片播放前的广告|I usually skip pre-roll ads before online videos.
T|sponsored posts|赞助推广帖：付费宣传的社交媒体内容|Sponsored posts sometimes look like ordinary posts.
T|product placement|植入式广告：影视内容中出现品牌产品|Product placement is common in films and TV shows.
T|celebrity endorsements|名人代言|Celebrity endorsements can make a brand seem more attractive.
T|targeted ads|定向广告：面向特定人群或兴趣投放|I see targeted ads for products I have searched for.
T|native ads|原生广告：外观融入平台普通内容的广告|Native ads can be difficult to distinguish from normal articles.
T|interstitial ads|插屏广告：在页面或活动切换时出现的全屏广告|An interstitial ad appeared between two levels of the game.
T|a slogan / a jingle|广告标语／广告短歌|I remember the jingle better than the product itself.
B2|raise brand awareness|提高品牌知名度|A memorable slogan can raise brand awareness.|economy
B2|encourage impulse buying|促使冲动购物|Limited-time offers can encourage impulse buying.|economy
B2|be intrusive and distracting|侵扰用户且让人分心|Pop-up ads are intrusive and distracting when I am studying.|weakness
B2|appeal to a target audience|吸引目标受众|Sports adverts often appeal to a younger target audience.|communication
C1|blur the line between content and advertising|模糊内容和广告之间的界线|Sponsored posts can blur the line between content and advertising.|communication
C1|exploit consumers' insecurities|利用消费者的不安全感|Some beauty adverts exploit consumers' insecurities about their appearance.|health
C1|undermine consumer trust|削弱消费者信任|Misleading claims can undermine consumer trust in a brand.|weakness
C1|normalise excessive consumption|让过度消费变得习以为常|Constant advertising can normalise excessive consumption.|economy
@Shoes
T|trainers / formal shoes|运动鞋／正式场合穿的鞋|I wear trainers most days and formal shoes for meetings.
T|cushioned soles / arch support|有缓冲的鞋底／足弓支撑|I look for cushioned soles when choosing walking shoes.
B2|strike a balance between comfort and style|在舒适和款式间取得平衡|I try to strike a balance between comfort and style.|strength
B2|be suitable for everyday wear|适合日常穿着|Simple trainers are suitable for everyday wear.|interest
C1|prioritise functionality over appearance|把实用性放在外观之前|For walking shoes, I prioritise functionality over appearance.|personality
C1|justify the higher price|让更高的价格显得值得|Better support and durability can justify the higher price.|economy
@Emails
T|an inbox / a subject line|收件箱／邮件主题栏|A clear subject line helps me find an email in my inbox.
T|an attachment / spam|附件／垃圾邮件|I check attachments carefully and delete spam.
B2|keep a record of correspondence|保留通信记录|Emails help companies keep a record of correspondence.|profession
B2|get the tone right|把握好语气|It is important to get the tone right in an email to a manager.|communication
C1|avoid ambiguity in written communication|避免书面交流中的歧义|Clear instructions help avoid ambiguity in written communication.|communication
C1|feel overwhelmed by incoming messages|被不断收到的信息压得喘不过气|I feel overwhelmed by incoming messages on busy days.|health
@Street markets
T|a food stall / a street vendor|食品摊／街头商贩|I bought lunch from a food stall run by a local street vendor.
T|seasonal produce / a flea market|时令农产品／旧货市场|I buy seasonal produce at the market near my home.
B2|support independent traders|支持独立商贩|Shopping at street markets supports independent traders.|economy
B2|bargain over the price|讨价还价|Some shoppers enjoy bargaining over the price.|communication
C1|preserve the character of a neighbourhood|保留街区的特色|Traditional markets preserve the character of a neighbourhood.|sentimental
C1|provide a livelihood for local vendors|为当地商贩提供生计|Street markets provide a livelihood for local vendors.|profession
@Lost and found
T|a lost-property office|失物招领处|I asked at the lost-property office about my bag.
T|an identity card / a valuables pouch|身份证／贵重物品小袋|I keep my identity card in a small valuables pouch.
B2|retrace my steps|沿原路回去寻找|I retraced my steps after realising my wallet was missing.|strength
B2|report an item missing|报告物品丢失|I reported my phone missing at the station.|communication
C1|be reunited with a lost possession|找回丢失的物品|I was relieved to be reunited with my lost possession.|sentimental
C1|take precautions against theft|采取防盗措施|Travellers should take precautions against theft in crowded places.|strength
@Collecting things
T|memorabilia / keepsakes|纪念收藏品／纪念物|I keep a few childhood keepsakes in a box.
T|limited-edition items|限量版物品|Some collectors pay extra for limited-edition items.
B2|build up a collection over time|逐渐积累收藏|I have built up a collection of postcards over time.|interest
B2|have sentimental value|有情感价值|The coins have sentimental value because they were my grandfather's.|sentimental
C1|attach personal significance to objects|赋予物品个人意义|People often attach personal significance to objects from childhood.|sentimental
C1|distinguish collecting from hoarding|区分收藏和囤积|It is useful to distinguish collecting from hoarding things we never use.|weakness
@Computers
T|a desktop / a laptop|台式电脑／笔记本电脑|I use a laptop for studying and a desktop at work.
T|cloud storage / a backup|云存储／备份|I keep a backup of my homework in cloud storage.
B2|rely on digital tools|依赖数字工具|I rely on digital tools to organise my work.|profession
B2|improve productivity|提高工作效率|A faster computer can improve productivity.|strength
C1|bridge the digital divide|缩小数字鸿沟|Affordable computers can help bridge the digital divide.|education
C1|become overly dependent on technology|变得过于依赖技术|We can become overly dependent on technology for simple tasks.|weakness
@Growing vegetables
T|a vegetable patch / an allotment|菜地／租用的种植地块|My neighbours grow beans in a small vegetable patch.
T|seedlings / compost|幼苗／堆肥|I planted seedlings in soil mixed with compost.
B2|grow produce from scratch|从头开始种农产品|Growing produce from scratch takes patience.|interest
B2|develop a better understanding of food production|更了解食物生产|Gardening develops children's understanding of food production.|education
C1|reduce reliance on commercially grown produce|减少对商业种植农产品的依赖|A vegetable garden can reduce reliance on commercially grown produce.|economy
C1|experience the satisfaction of self-sufficiency|体验自给自足的满足感|Even a small harvest gives me the satisfaction of self-sufficiency.|sentimental
@Politeness
T|table manners / etiquette|餐桌礼仪／社交礼仪|Children often learn table manners at home.
T|a polite request / an apology|礼貌的请求／道歉|A polite request works better than a demand.
B2|show consideration for others|体谅他人|Keeping your voice down shows consideration for others.|personality
B2|respect personal boundaries|尊重个人界限|Polite people respect personal boundaries.|communication
C1|navigate differences in social etiquette|应对社交礼仪差异|Travellers need to navigate differences in social etiquette.|communication
C1|avoid coming across as dismissive|避免给人不屑一顾的印象|I listen carefully to avoid coming across as dismissive.|personality
@Rubbish
T|recycling bins / food waste|回收桶／厨余垃圾|Our building has separate bins for recycling and food waste.
T|single-use packaging / landfill|一次性包装／垃圾填埋场|Single-use packaging can end up in landfill.
B2|reduce household waste|减少家庭垃圾|Planning meals can reduce household waste.|strength
B2|dispose of rubbish responsibly|负责任地处理垃圾|People should dispose of rubbish responsibly.|personality
C1|shift towards a circular economy|向循环经济转变|Reusing materials helps society shift towards a circular economy.|economy
C1|tackle the problem at its source|从源头解决问题|Reducing packaging tackles the waste problem at its source.|strength
@Tiredness
T|sleep deprivation / a power nap|睡眠不足／短时间小睡|A power nap sometimes helps after a night of sleep deprivation.
T|mental fatigue / physical exhaustion|脑疲劳／身体疲惫|Long meetings cause mental fatigue for me.
B2|feel drained after a demanding day|忙碌一天后感到耗尽精力|I feel drained after a demanding day at work.|health
B2|restore my energy levels|恢复精力|A quiet evening helps restore my energy levels.|relaxation
C1|recognise the early signs of burnout|识别职业倦怠的早期迹象|Workers should recognise the early signs of burnout.|health
C1|sustain an unhealthy work pattern|维持不健康的工作模式|Working late every night sustains an unhealthy work pattern.|profession
@Travelling
T|an itinerary / a stopover|行程安排／中途停留|Our itinerary included a short stopover in another city.
T|carry-on luggage / a window seat|随身行李／靠窗座位|I travel with carry-on luggage and choose a window seat.
B2|immerse myself in local culture|融入当地文化|I try to immerse myself in local culture when travelling.|education
B2|travel off the beaten track|去非热门路线旅行|I prefer travelling off the beaten track to visiting crowded resorts.|interest
C1|challenge preconceived ideas about a place|挑战对一个地方的先入之见|Travel can challenge preconceived ideas about a place.|education
C1|weigh the environmental cost of travel|考虑旅行的环境代价|We should weigh the environmental cost of frequent flights.|weakness
@Papers
T|origami / stationery|折纸／文具|I enjoyed origami and collected colourful stationery as a child.
T|a handwritten note / scrap paper|手写便条／废纸或零散纸张|I write quick reminders on scrap paper.
B2|retain information more effectively|更有效地记住信息|Writing notes by hand helps me retain information more effectively.|education
B2|add a personal touch|增添个人心意|A handwritten note adds a personal touch to a gift.|sentimental
C1|balance convenience with environmental concerns|兼顾便利和环境问题|Using paper means balancing convenience with environmental concerns.|weakness
C1|preserve a tangible record of memories|保留可以触摸的记忆记录|Letters preserve a tangible record of memories.|sentimental
@Secondary schools
T|a school uniform / a timetable|校服／课程表|Our timetable included a sports lesson every week.
T|extracurricular activities / peer pressure|课外活动／同伴压力|Extracurricular activities helped me make friends.
B2|adjust to a new school environment|适应新学校环境|It took time to adjust to a new school environment.|weakness
B2|develop a sense of belonging|建立归属感|School clubs helped me develop a sense of belonging.|sentimental
C1|shape a student's sense of identity|塑造学生的自我认同|School experiences can shape a student's sense of identity.|education
C1|balance academic demands with personal development|平衡学业要求与个人成长|Schools should balance academic demands with personal development.|education
@Study
T|coursework / a deadline|课程作业／截止日期|I plan my coursework around each deadline.
T|a lecture / a seminar|讲座课／研讨课|Seminars give students more chances to discuss ideas.
B2|put theory into practice|把理论用于实践|Group projects let me put theory into practice.|education
B2|manage a heavy workload|应对繁重的学习任务|A weekly plan helps me manage a heavy workload.|weakness
C1|cultivate independent thinking|培养独立思考|Good teaching cultivates independent thinking rather than memorisation alone.|education
C1|identify gaps in my understanding|找出自己理解中的缺口|Explaining a topic to others helps me identify gaps in my understanding.|weakness
@Work
T|a flexible schedule / remote work|弹性日程／远程工作|Remote work gives some people a more flexible schedule.
T|job satisfaction / career progression|工作满意度／职业发展|Career progression matters, but so does job satisfaction.
B2|maintain a healthy work-life balance|维持健康的工作生活平衡|Flexible hours help me maintain a healthy work-life balance.|health
B2|take on more responsibility|承担更多责任|I would like to take on more responsibility at work.|profession
C1|derive a sense of purpose from my work|从工作中获得意义感|I derive a sense of purpose from helping students improve.|sentimental
C1|weigh job security against career ambitions|权衡工作稳定性和职业抱负|Young workers may weigh job security against career ambitions.|profession
@Hometown
T|a residential district / the city centre|住宅区／市中心|I grew up in a residential district outside the city centre.
T|local landmarks / public amenities|当地地标／公共设施|The town has new public amenities near its main landmark.
B2|undergo rapid development|经历快速发展|My hometown has undergone rapid development recently.|strength
B2|retain its local character|保留当地特色|I hope the old town retains its local character.|sentimental
C1|balance urban growth with heritage preservation|平衡城市发展和遗产保护|The council must balance urban growth with heritage preservation.|strength
C1|feel a strong attachment to my roots|对自己的根源有深厚感情|I feel a strong attachment to my roots despite living elsewhere.|sentimental
@The area you live in
T|a residential neighbourhood / a community centre|住宅街区／社区中心|Our neighbourhood has a busy community centre.
T|public transport links / local amenities|公交连接／生活配套设施|Good transport links and local amenities make the area convenient.
B2|have a strong sense of community|有强烈的社区归属感|The area has a strong sense of community.|sentimental
B2|be within walking distance|在步行可达范围内|Most shops are within walking distance of my flat.|strength
C1|foster interaction between neighbours|促进邻里交流|Shared gardens can foster interaction between neighbours.|communication
C1|be affected by rising housing costs|受到住房成本上涨的影响|The neighbourhood is affected by rising housing costs.|economy
@Accommodation
T|a studio flat / a shared apartment|单间公寓／合租公寓|I live in a shared apartment, but I would prefer a studio flat.
T|a tenancy agreement / a deposit|租赁合同／押金|I read the tenancy agreement before paying the deposit.
B2|make the most of limited space|充分利用有限空间|Small shelves help me make the most of limited space.|strength
B2|have access to natural light|能获得自然光照|My room has access to natural light throughout the day.|health
C1|prioritise affordability over location|优先考虑价格而非地段|Students often prioritise affordability over location.|economy
C1|strike a balance between privacy and companionship|平衡隐私和有人陪伴|Shared housing means striking a balance between privacy and companionship.|sentimental
@History
T|historical artefacts / an exhibition|历史文物／展览|The exhibition includes historical artefacts from the local area.
T|oral history / a historical site|口述历史／历史遗址|Oral history adds personal stories to what we see at historical sites.
B2|gain insight into the past|深入了解过去|Museums help visitors gain insight into the past.|education
B2|bring history to life|使历史变得生动|Personal stories bring history to life.|interest
C1|challenge a one-sided account of history|质疑片面的历史叙述|Different sources can challenge a one-sided account of history.|education
C1|trace the origins of present-day issues|追溯当今问题的根源|Studying history helps us trace the origins of present-day issues.|education
@Headphones
T|noise-cancelling headphones / earbuds|降噪耳机／耳塞式耳机|Noise-cancelling headphones are useful on a crowded train.
T|sound quality / battery life|音质／续航时间|I compare sound quality and battery life before buying earbuds.
B2|create a sense of personal space|营造个人空间感|Headphones create a sense of personal space during a commute.|relaxation
B2|cut out unwanted noise|过滤不需要的噪音|These headphones cut out unwanted noise.|strength
C1|become less aware of my surroundings|变得不太注意周围环境|Wearing headphones outdoors can make me less aware of my surroundings.|weakness
C1|compromise hearing through prolonged exposure|因长时间接触声音损伤听力|High volume can compromise hearing through prolonged exposure.|health
@Mirrors
T|a full-length mirror / a dressing mirror|全身镜／梳妆镜|I use a full-length mirror when choosing an outfit.
T|a reflection / an optical illusion|映像／视觉错觉|Mirrors can create an optical illusion of extra space.
B2|pay attention to my appearance|注意自己的外表|I pay attention to my appearance before a meeting.|profession
B2|make a space feel more open|让空间显得更开阔|A wall mirror makes a small space feel more open.|strength
C1|become overly self-conscious about my appearance|对外表变得过度敏感|Constantly checking mirrors can make me overly self-conscious about my appearance.|weakness
C1|distort my perception of body image|扭曲对身体形象的认知|Comparing reflections with edited photos can distort my perception of body image.|health
@Websites
T|a search engine / a homepage|搜索引擎／主页|I use a search engine to find educational websites.
T|a subscription / a user interface|订阅／用户界面|I prefer a simple user interface without a paid subscription.
B2|navigate a website easily|轻松浏览网站|Clear menus help users navigate a website easily.|strength
B2|check the reliability of a source|核实来源是否可靠|I check the reliability of a source before using it.|education
C1|distinguish credible information from misinformation|区分可信信息和错误信息|Students need to distinguish credible information from misinformation.|education
C1|prioritise accessibility in website design|在网站设计中优先考虑无障碍使用|Designers should prioritise accessibility in website design.|strength
@Evening time
T|an evening routine / leisure time|晚间惯例／休闲时间|My evening routine leaves some leisure time for reading.
T|screen time / a bedtime routine|屏幕使用时间／睡前惯例|I reduce screen time as part of my bedtime routine.
B2|switch off from work|暂时放下工作|Cooking helps me switch off from work.|relaxation
B2|make room for quality time|腾出高质量相处时间|I make room for quality time with my family.|sentimental
C1|establish a clear boundary between work and rest|划清工作与休息的界限|An evening routine establishes a clear boundary between work and rest.|health
C1|resist the urge to remain constantly available|克制一直保持在线响应的冲动|I resist the urge to remain constantly available for work messages.|profession
@Old buildings
T|a heritage building / a listed building|历史建筑／受保护的登记建筑|A listed building usually needs careful restoration.
T|restoration / architectural features|修复／建筑特色|Restoration should protect the original architectural features.
B2|preserve a link with the past|保留与过去的联系|Old buildings preserve a link with the past.|sentimental
B2|adapt a building for modern use|改造建筑以适应现代用途|An old warehouse can be adapted for modern use.|strength
C1|safeguard architectural heritage|保护建筑遗产|Cities should safeguard architectural heritage during redevelopment.|strength
C1|reconcile conservation with practical needs|协调保护和实际需求|Restoration projects must reconcile conservation with practical needs.|economy
@Watches
T|a wristwatch / a smartwatch|腕表／智能手表|I prefer a simple wristwatch to a smartwatch.
T|a watch strap / a timepiece|表带／计时器具或钟表|Changing the watch strap can make an old watch look new.
B2|serve a practical purpose|有实际用途|A watch serves a practical purpose even when I have a phone.|strength
B2|keep track of my schedule|掌握自己的日程|My watch helps me keep track of my schedule.|profession
C1|carry symbolic significance|具有象征意义|An inherited watch can carry symbolic significance.|sentimental
C1|value craftsmanship over brand prestige|看重工艺而非品牌名气|I value craftsmanship over brand prestige when choosing a watch.|personality
@Singing
T|a choir / karaoke|合唱团／卡拉 OK|I enjoyed singing in a choir at school.
T|a melody / vocal training|旋律／声乐训练|Vocal training helps singers follow a melody accurately.
B2|express emotions through music|通过音乐表达情感|Singing lets people express emotions through music.|sentimental
B2|build confidence in front of an audience|建立面对观众的自信|Singing at school helped me build confidence in front of an audience.|education
C1|overcome inhibitions about performing|克服表演时的拘谨|Group singing can help people overcome inhibitions about performing.|personality
C1|create a shared emotional experience|创造共同的情感体验|A choir can create a shared emotional experience.|sentimental
@Outer space and stars
T|a constellation / a telescope|星座／望远镜|I used a telescope to look for a constellation.
T|space exploration / a satellite|太空探索／卫星|Satellites are one practical result of space exploration.
B2|spark an interest in astronomy|激发对天文学的兴趣|A clear night sky can spark an interest in astronomy.|interest
B2|expand our understanding of the universe|拓展对宇宙的理解|Space research expands our understanding of the universe.|education
C1|weigh scientific benefits against enormous costs|权衡科学收益和巨额成本|Governments must weigh scientific benefits against enormous costs.|economy
C1|put human existence into perspective|从更广阔的视角看人类的存在|Learning about space puts human existence into perspective.|sentimental
@Teachers
T|a lesson plan / classroom management|教案／课堂管理|A good lesson plan supports effective classroom management.
T|constructive feedback / a teaching method|建设性反馈／教学方法|Constructive feedback matters as much as the teaching method.
B2|adapt lessons to individual needs|按个人需求调整课程|Good teachers adapt lessons to individual needs.|education
B2|encourage active participation|鼓励积极参与|Small-group tasks encourage active participation.|communication
C1|nurture intellectual curiosity|培养求知欲|Teachers can nurture intellectual curiosity through open questions.|education
C1|balance guidance with learner autonomy|平衡指导和学习者自主性|Effective teachers balance guidance with learner autonomy.|strength
@Ambition and dreams
T|a long-term goal / a career aspiration|长期目标／职业抱负|My long-term goal is connected to my career aspirations.
T|a milestone / a backup plan|阶段性目标／备用计划|I set small milestones and keep a backup plan.
B2|pursue a realistic ambition|追求现实可行的理想|I want to pursue a realistic ambition rather than rush into a plan.|interest
B2|stay motivated despite setbacks|受挫后仍保持动力|Support from friends helps me stay motivated despite setbacks.|personality
C1|align my ambitions with my personal values|让抱负与个人价值观一致|I try to align my ambitions with my personal values.|personality
C1|reassess my priorities as circumstances change|随着情况变化重新评估轻重缓急|I reassess my priorities as circumstances change.|profession
@Cinema
T|a multiplex / a box-office hit|多厅影院／卖座电影|The multiplex usually shows the latest box-office hits.
T|special effects / subtitles|特效／字幕|I prefer good storytelling to impressive special effects.
B2|be drawn into the storyline|被故事情节吸引|The large screen helps me get drawn into the storyline.|interest
B2|offer an immersive viewing experience|提供沉浸式观影体验|A cinema offers an immersive viewing experience.|strength
C1|appreciate subtle character development|欣赏细腻的人物变化|I enjoy films that let me appreciate subtle character development.|interest
C1|sacrifice storytelling for spectacle|为了视觉奇观牺牲叙事|Some films sacrifice storytelling for spectacle.|weakness
@Social media
T|a news feed / a hashtag|动态信息流／话题标签|A hashtag can help users find posts outside their news feed.
T|an influencer / an algorithm|网红／算法|The algorithm often recommends posts from influencers.
B2|curate an online image|经营网上形象|People often curate an online image that shows only happy moments.|personality
B2|spread information rapidly|迅速传播信息|Social media spreads information rapidly.|communication
C1|create an echo chamber|形成回音室效应|An algorithm can create an echo chamber of similar opinions.|weakness
C1|fuel unrealistic social comparisons|助长不切实际的社会比较|Edited posts can fuel unrealistic social comparisons.|health
@Science
T|a hypothesis / an experiment|假设／实验|An experiment can test a hypothesis.
T|scientific evidence / a research finding|科学证据／研究结果|A research finding should be supported by scientific evidence.
B2|apply scientific knowledge to daily life|把科学知识用于日常生活|People apply scientific knowledge to daily life when choosing healthy habits.|strength
B2|encourage evidence-based thinking|鼓励基于证据的思考|Science lessons encourage evidence-based thinking.|education
C1|evaluate the strength of scientific evidence|评估科学证据的力度|People should evaluate the strength of scientific evidence behind a claim.|education
C1|distinguish correlation from causation|区分相关性和因果关系|Scientific literacy helps us distinguish correlation from causation.|education
@Public gardens and parks
T|a walking trail / a playground|步行小径／儿童游乐场|The park has a walking trail next to a playground.
T|urban green space / a botanical garden|城市绿地／植物园|A botanical garden is a valuable type of urban green space.
B2|provide a welcome escape from urban life|让人暂时逃离城市生活|Parks provide a welcome escape from urban life.|relaxation
B2|encourage outdoor recreation|鼓励户外休闲活动|Safe parks encourage outdoor recreation.|health
C1|mitigate the effects of urban heat|减轻城市热环境的影响|Trees in public parks can mitigate the effects of urban heat.|health
C1|ensure equitable access to green space|确保公平获得绿地空间|Cities should ensure equitable access to green space.|strength
@Cars
T|an electric vehicle / a charging point|电动车／充电点|Electric vehicles need convenient charging points.
T|traffic congestion / a parking permit|交通拥堵／停车许可证|A parking permit does not solve traffic congestion.
B2|reduce dependence on private cars|减少对私家车的依赖|Better buses can reduce dependence on private cars.|economy
B2|offer greater flexibility|提供更大灵活性|Driving offers greater flexibility for families.|strength
C1|account for the hidden costs of car ownership|考虑养车的隐性成本|Buyers should account for the hidden costs of car ownership.|economy
C1|contribute to car-dependent urban development|促成依赖汽车的城市发展|Poor public transport contributes to car-dependent urban development.|weakness
@Shopping
T|a refund / a receipt|退款／收据|I keep the receipt in case I need a refund.
T|a discount code / an impulse purchase|折扣码／冲动购买的东西|A discount code can tempt me into an impulse purchase.
B2|make an informed purchasing decision|作出明智的购买决定|Reviews help shoppers make an informed purchasing decision.|education
B2|be tempted by a special offer|被优惠活动吸引|I am sometimes tempted by a special offer.|economy
C1|distinguish genuine value from clever marketing|区分真正的价值和巧妙营销|Shoppers need to distinguish genuine value from clever marketing.|economy
C1|resist the pressure to consume constantly|抵抗不断消费的压力|I try to resist the pressure to consume constantly.|personality
@Tidiness
T|clutter / storage space|杂乱堆放的东西／储物空间|More storage space can help reduce clutter.
T|decluttering / a filing system|清理冗余物品／文件归档系统|Decluttering my desk made the filing system easier to use.
B2|keep my surroundings organised|保持周围环境有条理|I find it easier to focus when I keep my surroundings organised.|strength
B2|create a calmer living environment|营造更平静的居住环境|Tidying up creates a calmer living environment.|health
C1|reduce the mental load of a cluttered space|减少杂乱空间带来的心理负担|Regular tidying reduces the mental load of a cluttered space.|health
C1|avoid becoming excessively rigid about order|避免对秩序变得过分刻板|I try to avoid becoming excessively rigid about order.|weakness
@Music
T|a playlist / a music genre|播放列表／音乐流派|My playlist includes several music genres.
T|lyrics / instrumental music|歌词／器乐|I prefer instrumental music when studying because lyrics distract me.
B2|reflect my mood|反映我的心情|My choice of music often reflects my mood.|sentimental
B2|broaden my musical taste|拓宽音乐喜好|Recommendations help me broaden my musical taste.|interest
C1|evoke a strong emotional response|唤起强烈的情绪反应|A familiar song can evoke a strong emotional response.|sentimental
C1|transcend language barriers|超越语言障碍|Music can transcend language barriers even when lyrics are unfamiliar.|communication
@Clothes
T|casual wear / formal attire|休闲服／正式着装|My workplace allows casual wear except for formal meetings.
T|fast fashion / sustainable fabrics|快时尚／可持续面料|I am trying to choose sustainable fabrics instead of buying fast fashion frequently.
B2|express my personal style|表达个人风格|Clothes let me express my personal style.|personality
B2|choose quality over quantity|重质不重量|I choose quality over quantity when buying clothes.|economy
C1|challenge the throwaway culture of fast fashion|挑战快时尚的用完即弃文化|Buying fewer clothes can challenge the throwaway culture of fast fashion.|economy
C1|conform to social expectations about appearance|遵从社会对外表的期待|People sometimes dress to conform to social expectations about appearance.|personality
@Jokes
T|a punchline / a practical joke|笑话的包袱／恶作剧|A good punchline can be funny without making someone the target.
T|sarcasm / wordplay|讽刺话／文字游戏|Sarcasm and wordplay can be difficult in another language.
B2|lighten the mood|缓和气氛|A gentle joke can lighten the mood in a meeting.|relaxation
B2|take a joke the wrong way|误解玩笑或因玩笑不快|People may take a joke the wrong way if they do not know you.|communication
C1|judge whether humour is appropriate to the context|判断幽默是否适合当前场合|Speakers should judge whether humour is appropriate to the context.|communication
C1|reinforce harmful stereotypes|强化有害的刻板印象|Some jokes reinforce harmful stereotypes rather than bring people together.|weakness
`;
  function add(text) {
    text.trim().split('\n').forEach(function(line){
      if(line.charAt(0)==='@'){key=line.slice(1);data[key]=data[key]||[];return;}
      var p=line.split('|');data[key].push({level:p[0],en:p[1],zh:p[2],example:p[3],angle:p[4]||null});
    });
  }
  add(source);
  add(`
@popular
T|a role model / a public figure|榜样／公众人物|A popular public figure can become a role model for teenagers.
T|social status / peer approval|社会地位／同伴认可|Some students care a lot about peer approval.
B2|gain recognition for an achievement|因成就获得认可|Students may gain recognition for an achievement in sport.|strength
B2|have a positive influence on others|对别人有积极影响|A popular person can have a positive influence on others.|communication
C1|distinguish popularity from genuine respect|区分人气和真正的尊重|We should distinguish popularity from genuine respect.|personality
C1|feel compelled to seek external validation|觉得不得不寻求外界认可|Some teenagers feel compelled to seek external validation.|weakness
@sports
T|a championship / a training session|锦标赛／训练课|The team has extra training sessions before a championship.
T|sportsmanship / a personal best|体育精神／个人最好成绩|Good sportsmanship matters as much as achieving a personal best.
B2|perform well under pressure|在压力下表现出色|I admire athletes who perform well under pressure.|strength
B2|show commitment to training|对训练全身心投入|Professional players show commitment to training.|profession
C1|demonstrate resilience in the face of defeat|面对失败展现韧性|Great athletes demonstrate resilience in the face of defeat.|personality
C1|balance commercial demands with athletic performance|平衡商业要求和竞技表现|Sports stars balance commercial demands with athletic performance.|profession
@health
T|a balanced diet / regular exercise|均衡饮食／规律运动|A balanced diet and regular exercise are parts of a healthy routine.
T|a sedentary lifestyle / a fitness tracker|久坐的生活方式／运动追踪设备|A fitness tracker reminded me to move during my sedentary working day.
B2|make sustainable lifestyle changes|作出能长期维持的生活方式改变|Small goals make sustainable lifestyle changes easier.|health
B2|encourage someone without judging them|不评判地鼓励某人|I tried to encourage my friend without judging him.|communication
C1|address the underlying causes of unhealthy habits|处理不健康习惯的深层原因|We should address the underlying causes of unhealthy habits.|health
C1|respect someone's autonomy over lifestyle choices|尊重某人自主选择生活方式|Advice should respect someone's autonomy over lifestyle choices.|personality
@older
T|a retired person / a pension|退休人士／养老金|A retired person may depend on a pension.
T|intergenerational relationships / life experience|代际关系／人生经验|Sharing life experience can improve intergenerational relationships.
B2|pass on valuable experience|传递宝贵经验|Older people can pass on valuable experience to younger generations.|education
B2|remain actively involved in the community|继续积极参与社区活动|Many older people remain actively involved in the community.|sentimental
C1|challenge age-related stereotypes|挑战与年龄有关的刻板印象|Active older people challenge age-related stereotypes.|personality
C1|preserve dignity and independence in later life|在晚年保持尊严和独立|Support should preserve dignity and independence in later life.|health
@craft
T|woodworking / embroidery|木工／刺绣|My grandmother enjoys embroidery and my uncle likes woodworking.
T|handmade crafts / craftsmanship|手工艺品／工艺技巧|Handmade crafts often show impressive craftsmanship.
B2|turn a creative idea into something tangible|把创意变成实物|Crafts let people turn a creative idea into something tangible.|interest
B2|develop patience and attention to detail|培养耐心和对细节的关注|Making models develops patience and attention to detail.|education
C1|preserve traditional craftsmanship|保留传统工艺|Learning from older makers helps preserve traditional craftsmanship.|education
C1|derive satisfaction from the creative process|从创作过程中获得满足|My friend derives satisfaction from the creative process itself.|sentimental
@photos
T|a portrait / a landscape photograph|人像照／风景照|My friend prefers landscape photographs to portraits.
T|composition / natural lighting|构图／自然光线|Good composition and natural lighting can improve a photo.
B2|document everyday moments|记录日常时刻|My sister enjoys documenting everyday moments.|sentimental
B2|develop an eye for detail|练出观察细节的眼光|Photography helps people develop an eye for detail.|strength
C1|convey a story through visual composition|通过视觉构图讲述故事|A photographer can convey a story through visual composition.|communication
C1|balance recording an experience with being present|平衡记录体验和投入当下|Travellers should balance recording an experience with being present.|weakness
@meeting
T|a brief encounter / a first impression|短暂的相遇／第一印象|A brief encounter can still leave a strong first impression.
T|small talk / a shared interest|寒暄／共同兴趣|Small talk helped us discover a shared interest.
B2|strike up a conversation|主动攀谈|I struck up a conversation with the person beside me.|communication
B2|leave a lasting impression|留下长久的印象|Her kindness left a lasting impression on me.|sentimental
C1|establish rapport in a short interaction|在短暂交流中建立融洽关系|A warm manner helps people establish rapport in a short interaction.|communication
C1|reconsider an initial judgement|重新考虑最初的判断|Talking to someone can make us reconsider an initial judgement.|personality
@success
T|a setback / a breakthrough|挫折／突破|He had several setbacks before making a breakthrough.
T|perseverance / an achievement|坚持不懈／成就|Her achievement was the result of perseverance.
B2|push myself beyond my comfort zone|让自己走出舒适区|Learning to speak in public pushed me beyond my comfort zone.|personality
B2|learn from constructive criticism|从建设性的批评中学习|Successful people learn from constructive criticism.|education
C1|turn adversity into an opportunity for growth|把逆境转成成长机会|She turned adversity into an opportunity for growth.|strength
C1|acknowledge the role of support and circumstance|承认支持和环境所起的作用|We should acknowledge the role of support and circumstance in success.|sentimental
@happy
T|optimism / contentment|乐观／满足感|My friend combines optimism with contentment about everyday life.
T|emotional well-being / gratitude|情绪健康／感恩|Gratitude can be part of emotional well-being.
B2|maintain a positive outlook|保持积极的看法|She maintains a positive outlook even on difficult days.|personality
B2|find enjoyment in everyday activities|在日常活动中找到乐趣|He finds enjoyment in everyday activities like cooking.|relaxation
C1|distinguish lasting contentment from temporary excitement|区分持久满足和短暂兴奋|Happiness involves distinguishing lasting contentment from temporary excitement.|sentimental
C1|avoid suppressing difficult emotions|避免压抑难以面对的情绪|Being positive should not mean suppressing difficult emotions.|health
@languages
T|pronunciation / fluency|发音／流利度|Speaking practice helps with both pronunciation and fluency.
T|a language exchange / immersion|语言交换／沉浸式接触|A language exchange gives learners a small taste of immersion.
B2|use vocabulary in context|在语境中运用词汇|I remember words better when I use vocabulary in context.|education
B2|communicate with greater confidence|更自信地交流|Regular practice helps me communicate with greater confidence.|communication
C1|develop sensitivity to nuance and register|培养对细微含义和语域的敏感度|Advanced learners develop sensitivity to nuance and register.|education
C1|overcome the fear of linguistic imperfection|克服表达不完美的恐惧|Learners need to overcome the fear of linguistic imperfection.|weakness
@business
T|an entrepreneur / a start-up|创业者／初创企业|An entrepreneur may need support to launch a start-up.
T|customer loyalty / cash flow|顾客忠诚度／现金流|A small business needs both customer loyalty and healthy cash flow.
B2|identify a gap in the market|发现市场空白|Successful founders often identify a gap in the market.|strength
B2|build a loyal customer base|建立忠实的顾客群|Good service helps a shop build a loyal customer base.|economy
C1|navigate uncertainty in a competitive market|应对竞争市场中的不确定性|Business owners need to navigate uncertainty in a competitive market.|profession
C1|balance profitability with social responsibility|平衡盈利和社会责任|Businesses should balance profitability with social responsibility.|economy
@medical
T|a diagnosis / a treatment plan|诊断／治疗方案|A doctor explains the diagnosis before discussing a treatment plan.
T|patient care / a healthcare professional|病人护理／医疗专业人士|Patient care involves many healthcare professionals.
B2|make decisions under pressure|在压力下作出决定|Doctors often make decisions under pressure.|profession
B2|show empathy towards patients|对病人表现出共情|Medical workers should show empathy towards patients.|personality
C1|combine clinical expertise with compassionate care|把临床专业能力和有同情心的照护结合起来|A good doctor combines clinical expertise with compassionate care.|strength
C1|cope with the emotional demands of the profession|应对职业中的情绪负担|Medical workers must cope with the emotional demands of the profession.|health
@time
T|time management / a task list|时间管理／任务清单|A task list helps with time management.
T|a priority / a time-saving device|优先事项／省时设备|A dishwasher is a time-saving device that frees me for other priorities.
B2|streamline my daily routine|简化日常流程|Preparing clothes in advance streamlines my daily routine.|strength
B2|prioritise tasks effectively|有效安排任务的轻重缓急|I prioritise tasks effectively by checking deadlines.|profession
C1|eliminate unnecessary steps in a process|去掉流程中不必要的步骤|Digital forms eliminate unnecessary steps in the booking process.|strength
C1|allocate time in line with my priorities|按照轻重缓急分配时间|I try to allocate time in line with my priorities.|personality
@party
T|a host / a guest list|主人或主持人／宾客名单|The host checked the guest list before preparing dinner.
T|a reunion / a celebration|重聚／庆祝活动|Our school reunion became a lively celebration.
B2|create a relaxed atmosphere|营造轻松氛围|Simple games create a relaxed atmosphere at a party.|relaxation
B2|cater for different preferences|照顾不同偏好|A good host caters for different preferences.|personality
C1|strengthen social bonds through shared experiences|通过共同经历巩固社会联系|Celebrations strengthen social bonds through shared experiences.|sentimental
C1|balance personal enjoyment with hosting responsibilities|平衡个人享受和招待宾客的责任|Hosts balance personal enjoyment with hosting responsibilities.|weakness
@decision
T|a turning point / an alternative|转折点／替代选择|Choosing a different course was a turning point in my life.
T|a trade-off / a consequence|权衡取舍／后果|Every option involved a trade-off and possible consequences.
B2|consider the long-term consequences|考虑长期后果|I considered the long-term consequences before moving.|personality
B2|make a decision with confidence|自信地作出决定|Reliable advice helped me make a decision with confidence.|strength
C1|weigh competing priorities|权衡相互竞争的优先事项|Career decisions often involve weighing competing priorities.|profession
C1|make peace with an imperfect choice|接受一个不完美的选择|Sometimes we need to make peace with an imperfect choice.|sentimental
@commute
T|a commute / rush hour|通勤／高峰期|My commute is much longer during rush hour.
T|a transfer / a season ticket|换乘／长期通勤票|A season ticket is useful when my journey needs a transfer.
B2|turn travel time into productive time|把路上时间变成有用的时间|Audio lessons help turn travel time into productive time.|education
B2|deal with unpredictable delays|应对不可预测的延误|Commuters regularly deal with unpredictable delays.|weakness
C1|reduce the strain of a daily commute|减少每日通勤带来的负担|Flexible hours reduce the strain of a daily commute.|health
C1|accept a lengthy commute as a trade-off|把长时间通勤作为一种取舍接受|Some people accept a lengthy commute as a trade-off for affordable housing.|economy
@listening
T|a one-sided conversation / an anecdote|单方面的谈话／趣闻轶事|An interesting anecdote is better than a one-sided conversation.
T|active listening / a topic of conversation|积极倾听／谈话话题|Active listening helps even when the topic of conversation is unfamiliar.
B2|keep the conversation going|让谈话继续|I asked a simple question to keep the conversation going.|communication
B2|show interest without pretending|不假装地表现出兴趣|I try to show interest without pretending to know the subject.|personality
C1|redirect a conversation tactfully|巧妙而得体地转移话题|I redirected the conversation tactfully when it became repetitive.|communication
C1|balance courtesy with honest engagement|平衡礼貌和真诚参与|Good listeners balance courtesy with honest engagement.|personality
@gift
T|a personalised gift / a gift voucher|个性化礼物／礼品券|A personalised gift can feel more thoughtful than a gift voucher.
T|gift wrapping / a keepsake|礼物包装／纪念物|Nice gift wrapping made the small keepsake feel special.
B2|choose a gift that reflects someone's interests|选择体现对方兴趣的礼物|I chose a gift that reflected my friend's interests.|interest
B2|put thought into the choice|用心选择|The price matters less than putting thought into the choice.|sentimental
C1|express appreciation through a thoughtful gesture|通过用心的举动表达感激|A small gift can express appreciation through a thoughtful gesture.|sentimental
C1|separate a gift's emotional value from its price|区分礼物的情感价值和价格|We should separate a gift's emotional value from its price.|economy
@service
T|a sales assistant / customer service|售货员／客户服务|The sales assistant provided excellent customer service.
T|an after-sales service / a return policy|售后服务／退货政策|I asked about the return policy and after-sales service.
B2|go out of their way to help|特意多做一些来帮助|The staff went out of their way to help me.|strength
B2|handle a complaint professionally|专业地处理投诉|The manager handled my complaint professionally.|profession
C1|anticipate a customer's needs|预先想到顾客需求|Experienced staff can anticipate a customer's needs.|strength
C1|turn a negative experience into a positive one|把糟糕的经历变成积极经历|A sincere response can turn a negative experience into a positive one.|communication
@wasteTime
T|procrastination / a distraction|拖延／让人分心的事物|Phone notifications are a distraction that encourages procrastination.
T|endless scrolling / a screen-time limit|不停刷屏／屏幕时间限制|A screen-time limit helps me avoid endless scrolling.
B2|put off important tasks|拖延重要任务|I sometimes put off important tasks by checking my phone.|weakness
B2|set clear limits on an activity|为活动设定明确限制|I set clear limits on gaming during the week.|personality
C1|recognise the opportunity cost of an activity|意识到某项活动的机会成本|Recognising the opportunity cost helps me use time more carefully.|economy
C1|break a cycle of habitual procrastination|打破习惯性拖延的循环|Small deadlines help me break a cycle of habitual procrastination.|strength
`);
  add(`
@interview
T|an interviewer / a talk show|采访者／访谈节目|The interviewer invited an athlete onto the talk show.
T|a follow-up question / a personal account|追问／亲身叙述|A follow-up question encouraged a more personal account.
B2|give an honest account of an experience|诚实讲述一段经历|The actor gave an honest account of a difficult experience.|communication
B2|ask questions that reveal something new|提出能带来新信息的问题|Good interviewers ask questions that reveal something new.|education
C1|draw out a thoughtful response|引导对方给出经过思考的回答|An open question can draw out a thoughtful response.|communication
C1|challenge a public image without being confrontational|不咄咄逼人地质疑公众形象|A skilled interviewer can challenge a public image without being confrontational.|strength
@lesson
T|a practical demonstration / a learning objective|实际演示／学习目标|The practical demonstration made the learning objective clear.
T|hands-on learning / a visual aid|动手实践学习／视觉教具|Visual aids support hands-on learning.
B2|make a difficult concept easier to grasp|让难懂的概念更容易理解|A simple model made the concept easier to grasp.|education
B2|leave a lasting impact on my learning|对学习产生长久影响|That lesson left a lasting impact on my learning.|sentimental
C1|connect abstract ideas with concrete experience|把抽象概念和具体经历联系起来|Effective lessons connect abstract ideas with concrete experience.|education
C1|prompt me to question my assumptions|促使我质疑原来的假设|The discussion prompted me to question my assumptions.|education
@budgetTrip
T|an admission fee / a free attraction|入场费／免费景点|We chose a free attraction with no admission fee.
T|a day trip / a packed lunch|一日游／自带午餐|We took a packed lunch on our day trip.
B2|make the most of a limited budget|充分利用有限预算|We made the most of a limited budget by using buses.|economy
B2|enjoy good value for money|享受物有所值的体验|The museum offered good value for money.|strength
C1|challenge the idea that enjoyment requires spending|挑战快乐必须花钱的观念|A simple day out challenges the idea that enjoyment requires spending.|economy
C1|prioritise shared experiences over paid attractions|把共同体验放在付费景点之前|We prioritised shared experiences over paid attractions.|sentimental
@reply
T|a notification / an unread message|通知／未读信息|I noticed the unread message after missing the notification.
T|response time / message etiquette|回复时间／信息交流礼仪|People have different expectations about response time.
B2|take time to compose a thoughtful reply|花时间写认真考虑过的回复|I took time to compose a thoughtful reply to my teacher.|communication
B2|explain the reason for a delayed response|解释迟回复的原因|I explained the reason for my delayed response.|communication
C1|manage expectations about constant availability|管理对随时在线的期待|People need to manage expectations about constant availability.|health
C1|avoid an impulsive response to a sensitive message|避免对敏感信息冲动回复|I waited to avoid an impulsive response to a sensitive message.|personality
@techProblem
T|a software update / an error message|软件更新／错误提示|An error message appeared after the software update.
T|a connection issue / troubleshooting|连接问题／故障排查|Basic troubleshooting helped me fix the connection issue.
B2|work through a technical problem step by step|逐步处理技术问题|I worked through the technical problem step by step.|strength
B2|find a temporary workaround|找到临时替代办法|I found a temporary workaround by using another device.|strength
C1|identify the root cause of a recurring fault|找出反复故障的根源|Technical support identified the root cause of a recurring fault.|education
C1|remain resourceful when technology fails|技术失灵时仍能灵活想办法|It helps to remain resourceful when technology fails.|personality
@groupWork
T|a team leader / a shared deadline|组长／共同截止日期|The team leader reminded us of the shared deadline.
T|task allocation / a group discussion|任务分配／小组讨论|A group discussion helped with fair task allocation.
B2|bring different skills to the team|为团队带来不同技能|Each member brought different skills to the team.|strength
B2|resolve disagreements constructively|建设性地解决分歧|We tried to resolve disagreements constructively.|communication
C1|build consensus without silencing different views|不压制不同观点地达成共识|A good leader builds consensus without silencing different views.|communication
C1|ensure accountability within the group|确保组内成员对任务负责|Clear roles ensure accountability within the group.|profession
@cake
T|a birthday cake / a sponge cake|生日蛋糕／海绵蛋糕|My birthday cake was a homemade sponge cake.
T|icing / a cake decoration|糖霜／蛋糕装饰|My sister used icing for the cake decorations.
B2|put effort into making it personal|用心让它具有个人特色|My sister put effort into making the cake personal.|sentimental
B2|be the highlight of a celebration|成为庆祝活动的亮点|The cake was the highlight of the celebration.|interest
C1|symbolise the care behind a celebration|象征庆祝活动背后的用心|A homemade cake can symbolise the care behind a celebration.|sentimental
C1|attach emotional significance to a simple tradition|赋予简单传统以情感意义|Families attach emotional significance to simple traditions like sharing a cake.|sentimental
@early
T|an early start / a dawn departure|早早开始／黎明出发|Our dawn departure meant a very early start.
T|an alarm clock / a sleep schedule|闹钟／睡眠时间安排|I changed my sleep schedule and set an alarm clock.
B2|avoid the morning rush|避开早高峰的忙乱|Getting up early helped me avoid the morning rush.|strength
B2|get into the habit of waking early|养成早起习惯|It took time to get into the habit of waking early.|personality
C1|adjust my routine without compromising sleep|在不牺牲睡眠的前提下调整惯例|I adjusted my routine without compromising sleep.|health
C1|question the assumption that early rising suits everyone|质疑早起适合每个人的假设|We should question the assumption that early rising suits everyone.|weakness
@film
T|a plot twist / a film genre|情节反转／电影类型|I like thrillers with a convincing plot twist.
T|a screenplay / character development|剧本／人物塑造和变化|The screenplay had weak character development.
B2|fail to live up to my expectations|未达到我的期待|The film failed to live up to my expectations.|weakness
B2|have convincing performances|表演有说服力|The film had convincing performances despite its weak plot.|strength
C1|rely on predictable narrative devices|依赖可预测的叙事手法|The film relied on predictable narrative devices.|weakness
C1|portray complex emotions with subtlety|细腻地呈现复杂情绪|The lead actor portrayed complex emotions with subtlety.|strength
@book
T|a novel / a short story|小说／短篇故事|I enjoy novels, but I read short stories when I have less time.
T|a narrator / a fictional character|叙述者／虚构人物|The narrator describes a fictional character's childhood.
B2|be absorbed in a book|沉浸在书中|I was absorbed in the book for the whole journey.|interest
B2|see the world from another perspective|从另一个角度看世界|Stories help readers see the world from another perspective.|education
C1|explore morally complex characters|探索道德上复杂的人物|I enjoy books that explore morally complex characters.|interest
C1|challenge conventional ways of thinking|挑战传统思维方式|A good book can challenge conventional ways of thinking.|education
@environmentLaw
T|a plastic-bag ban / a recycling scheme|塑料袋禁令／回收计划|A recycling scheme may work alongside a plastic-bag ban.
T|emission limits / a fine|排放限制／罚款|Factories may face a fine if they break emission limits.
B2|encourage environmentally responsible behaviour|鼓励环保行为|Clear rules encourage environmentally responsible behaviour.|personality
B2|make the rules easier to enforce|让规定更容易执行|Simple guidelines make the rules easier to enforce.|strength
C1|balance environmental goals with economic realities|平衡环境目标和经济现实|Policy should balance environmental goals with economic realities.|economy
C1|hold polluters accountable for the damage they cause|让污染者为造成的损害负责|Environmental laws hold polluters accountable for the damage they cause.|strength
@programme
T|a documentary / a reality show|纪录片／真人秀|I prefer a documentary to a reality show.
T|an episode / a streaming platform|一集节目／流媒体平台|I watched one episode on a streaming platform.
B2|combine entertainment with useful information|结合娱乐和实用信息|The programme combined entertainment with useful information.|education
B2|keep viewers engaged|保持观众投入|Short interviews kept viewers engaged.|interest
C1|present a nuanced account of an issue|对问题呈现细致而多角度的叙述|A good documentary presents a nuanced account of an issue.|education
C1|avoid sensationalising real-life experiences|避免煽情炒作真实经历|Programmes should avoid sensationalising real-life experiences.|weakness
@festivalFood
T|a traditional recipe / a family feast|传统食谱／家宴|Our family feast includes several traditional recipes.
T|seasonal ingredients / a regional speciality|时令食材／地方特色菜|The regional speciality uses seasonal ingredients.
B2|keep a family tradition alive|延续家庭传统|Cooking the same dish keeps a family tradition alive.|sentimental
B2|bring generations together|让几代人聚在一起|Preparing festival food brings generations together.|communication
C1|embody a community's cultural identity|体现社群的文化认同|Traditional food can embody a community's cultural identity.|sentimental
C1|adapt traditions without losing their meaning|调整传统而不失去其意义|Families adapt traditions without losing their meaning.|education
@law
T|a regulation / law enforcement|规定／执法|A regulation needs clear guidance for law enforcement.
T|a legal obligation / a penalty|法律义务／处罚|People should understand the legal obligation before facing a penalty.
B2|protect the interests of the public|保护公众利益|A useful law protects the interests of the public.|strength
B2|make compliance more straightforward|让遵守规定更简单|Clear wording makes compliance more straightforward.|communication
C1|consider the unintended consequences of legislation|考虑立法的意外后果|Governments should consider the unintended consequences of legislation.|weakness
C1|balance individual freedom with collective welfare|平衡个人自由和集体福祉|A new law must balance individual freedom with collective welfare.|strength
@nature
T|a nature reserve / a hiking trail|自然保护区／徒步小径|The nature reserve has a well-marked hiking trail.
T|wildlife habitats / biodiversity|野生动物栖息地／生物多样性|Protecting wildlife habitats helps preserve biodiversity.
B2|escape the pressures of city life|逃离城市生活的压力|I visit the countryside to escape the pressures of city life.|relaxation
B2|develop an appreciation of nature|形成对自然的欣赏|Outdoor experiences help children develop an appreciation of nature.|education
C1|reconcile tourism with habitat conservation|协调旅游和栖息地保护|Popular destinations must reconcile tourism with habitat conservation.|economy
C1|recognise the intrinsic value of natural spaces|认识自然空间本身的价值|We should recognise the intrinsic value of natural spaces.|sentimental
@building
T|a skyscraper / a landmark|摩天大楼／地标|The skyscraper has become a local landmark.
T|a facade / a floor plan|建筑正面外观／平面布局图|The facade looks modern, but the floor plan is simple.
B2|combine practical use with attractive design|结合实用性和美观设计|The library combines practical use with attractive design.|strength
B2|make a positive contribution to the area|为当地带来积极贡献|A public building should make a positive contribution to the area.|strength
C1|integrate a building into its urban surroundings|让建筑融入城市周围环境|Architects should integrate a building into its urban surroundings.|strength
C1|prioritise visual impact at the expense of usability|为了视觉效果牺牲实用性|Some designs prioritise visual impact at the expense of usability.|weakness
@noise
T|construction noise / noise pollution|施工噪音／噪音污染|Construction noise is a major source of noise pollution here.
T|soundproofing / background noise|隔音措施／背景噪音|Better soundproofing reduces background noise indoors.
B2|disrupt my concentration|打断我的专注|Traffic noise disrupts my concentration.|health
B2|take measures to reduce noise|采取措施减少噪音|The school took measures to reduce noise during exams.|strength
C1|be subjected to persistent noise exposure|长期处在持续噪音中|People near busy roads are subjected to persistent noise exposure.|health
C1|balance urban activity with residents' need for quiet|平衡城市活动与居民安静生活的需要|Local rules should balance urban activity with residents' need for quiet.|strength
@crowds
T|overcrowding / a pedestrian street|过度拥挤／步行街|The pedestrian street suffers from overcrowding on holidays.
T|crowd control / queue management|人群管控／排队管理|Good queue management is part of effective crowd control.
B2|feel overwhelmed by the crowds|被拥挤的人群弄得不堪承受|I felt overwhelmed by the crowds at the festival.|health
B2|manage the flow of visitors|管理游客流动|Clear signs help manage the flow of visitors.|strength
C1|balance a lively atmosphere with personal comfort|平衡热闹氛围和个人舒适度|I try to balance a lively atmosphere with personal comfort.|relaxation
C1|ease pressure on overstretched public facilities|减轻不堪重负的公共设施的压力|Timed entry can ease pressure on overstretched public facilities.|strength
@city
T|public transport / a cultural district|公共交通／文化街区|Public transport made the cultural district easy to reach.
T|a tourist attraction / a local speciality|旅游景点／地方特色菜|We tried a local speciality near the main tourist attraction.
B2|offer a rich variety of experiences|提供丰富多样的体验|The city offers a rich variety of experiences.|interest
B2|combine convenience with cultural appeal|结合便利和文化吸引力|This city combines convenience with cultural appeal.|strength
C1|retain a distinctive identity amid rapid development|在快速发展中保留独特身份|Cities should retain a distinctive identity amid rapid development.|sentimental
C1|distribute the benefits of tourism more evenly|让旅游收益分布得更均衡|Supporting local shops distributes the benefits of tourism more evenly.|economy
@water
T|a riverbank / a freshwater lake|河岸／淡水湖|We walked along the riverbank before visiting the freshwater lake.
T|water quality / an ecosystem|水质／生态系统|Water quality affects the whole ecosystem.
B2|provide a valuable recreational space|提供有价值的休闲空间|The river provides a valuable recreational space.|relaxation
B2|support the local economy|支持当地经济|Visitors to the lake support the local economy.|economy
C1|balance human use with ecological protection|平衡人类利用和生态保护|Authorities must balance human use with ecological protection.|strength
C1|recognise the interdependence of communities and waterways|认识社区和水域之间的相互依赖|We should recognise the interdependence of communities and waterways.|education
@homeVisit
T|a guest room / a shared living space|客房／共用起居空间|The flat has a guest room but a small shared living space.
T|personal privacy / household rules|个人隐私／家庭规定|Household rules can protect everyone's personal privacy.
B2|appreciate the hospitality|感激热情款待|I appreciated the hospitality even though the house did not suit me.|sentimental
B2|have different expectations about living arrangements|对居住安排有不同期待|Friends can have different expectations about living arrangements.|personality
C1|distinguish a pleasant visit from a suitable long-term home|区分愉快的拜访和适合长住的家|I distinguish a pleasant visit from a suitable long-term home.|strength
C1|respect boundaries in a shared household|尊重共居家庭中的界限|People need to respect boundaries in a shared household.|communication
@boringPlace
T|a lack of amenities / limited entertainment options|配套设施不足／娱乐选择有限|The town has limited entertainment options for young people.
T|an isolated location / a quiet resort|偏僻的位置／安静的度假区|The quiet resort was in an isolated location.
B2|offer little variety in activities|活动缺少多样性|The area offered little variety in activities.|weakness
B2|fail to meet visitors' expectations|未能满足游客期待|The attraction failed to meet visitors' expectations.|weakness
C1|recognise that appeal depends on personal preferences|认识到吸引力取决于个人偏好|We should recognise that appeal depends on personal preferences.|personality
C1|revitalise a place through community-led activities|通过社区主导的活动振兴一个地方|Local events can revitalise a place through community-led activities.|strength
`);
  window.IELTSVocabularyLevels={banks:data,add:add};
})();
