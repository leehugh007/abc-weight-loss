import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

function ArticlePage({ articleId, onBack }) {
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  const articles = {
    'rebound-analysis': {
      title: '95%的人都會復胖，但這5%做對了什麼？',
      category: '復胖問題',
      readTime: '8分鐘閱讀',
      content: `如果你正在讀這篇文章，我猜你可能正處在一個熟悉的循環中：<span class="text-red-600 font-semibold">減肥、復胖、再減肥、再復胖</span>。也許這已經是你第三次、第五次，甚至第十次嘗試減肥了。

你不是唯一一個。

根據研究統計，<span class="bg-red-100 text-red-700 px-2 py-1 rounded font-bold">95%的減肥者會在一年內復胖</span>，其中三分之二的人甚至會比減肥前更重。這個數字聽起來殘酷，但它揭示了一個重要的真相：<span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">問題不在於你的意志力不夠強，而在於你用的方法根本就是錯的</span>。

## 你是不是也有這些經歷？

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
<p class="text-blue-800 italic">"我試過168斷食，剛開始瘦了5公斤，但後來忍不住大吃，結果反彈得更厲害。"</p>
</div>

<div class="bg-purple-50 border-l-4 border-purple-400 p-4 my-6">
<p class="text-purple-800 italic">"我辦了健身房會員，每天跑步一小時，累得半死，體重卻紋絲不動。"</p>
</div>

<div class="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
<p class="text-orange-800 italic">"我吃過代餐、喝過酵素、試過各種網紅減肥法，錢花了一大堆，體重還是在原地打轉。"</p>
</div>

如果這些話聽起來很熟悉，那麼你一定也體會過那種深深的挫敗感。每一次失敗，都像是在告訴你：「<span class="text-gray-600 line-through">你就是做不到</span>。」每一次復胖，都讓你對自己更加失望。

我認識一位學員，她叫小雨（化名），今年41歲。她告訴我，她從國中開始減肥，到現在已經<span class="bg-red-100 text-red-700 px-2 py-1 rounded font-bold">30年了</span>。30年來，她試過市面上幾乎所有的減肥方法：節食、運動、代餐、減肥藥、甚至連偏方都試過。

<div class="bg-gray-50 border-l-4 border-gray-400 p-4 my-6">
<p class="text-gray-700 italic">"我自嘲自己最瘦的時候就是受精卵時期，這些方法理所當然的通通失敗了。"</p>
</div>

小雨的故事不是個案。在我們的學員中，有太多人都有著相似的經歷。他們不是不努力，不是不想改變，而是<span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">一直在用錯誤的方法對抗一個複雜的問題</span>。

## 為什麼95%的人都會復胖？

在深入探討那<span class="bg-green-100 text-green-700 px-2 py-1 rounded font-bold">5%成功者</span>的秘密之前，我們先來理解為什麼大多數人會陷入減肥復胖的惡性循環。

### 第一個陷阱：把減肥當作短期任務

大多數人把減肥當作一個有開始和結束的任務。「<span class="text-red-600">我要在三個月內瘦10公斤</span>」、「<span class="text-red-600">夏天前要瘦到50公斤</span>」...這種思維本身就註定了失敗。

當你把減肥當作短期任務時，你會採用極端的方法：<span class="text-orange-600 font-semibold">嚴格節食、過度運動、完全戒掉某些食物</span>。這些方法在短期內確實有效，但它們都有一個共同點：<span class="bg-red-100 text-red-700 px-2 py-1 rounded">不可持續</span>。

### 第二個陷阱：對抗身體的自然機制

人體有一套精密的調節系統，當你突然大幅減少熱量攝取時，身體會啟動「<span class="text-orange-600 font-bold">飢荒模式</span>」：

<div class="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
<ul class="space-y-2">
<li class="flex items-center"><span class="w-2 h-2 bg-orange-400 rounded-full mr-3"></span><span class="text-orange-800">基礎代謝率下降</span></li>
<li class="flex items-center"><span class="w-2 h-2 bg-orange-400 rounded-full mr-3"></span><span class="text-orange-800">飢餓激素增加</span></li>
<li class="flex items-center"><span class="w-2 h-2 bg-orange-400 rounded-full mr-3"></span><span class="text-orange-800">脂肪儲存能力增強</span></li>
<li class="flex items-center"><span class="w-2 h-2 bg-orange-400 rounded-full mr-3"></span><span class="text-orange-800">肌肉量流失</span></li>
</ul>
</div>

<span class="bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">這就是為什麼節食減肥總是以復胖收場</span>。你不是在和脂肪戰鬥，你是在和幾百萬年演化出來的生存機制戰鬥。

### 第三個陷阱：忽視心理和情緒因素

很多人以為減肥只是「<span class="text-gray-600 line-through">少吃多動</span>」這麼簡單，但實際上，我們的飲食行為深受情緒、壓力、習慣和環境影響。

如果你不處理這些根本原因，即使暫時瘦下來，也會在壓力來臨時重新回到舊的飲食模式。

## 那5%成功者做對了什麼？

經過多年的觀察和研究，我發現那些能夠長期維持健康體重的人，都有以下幾個共同特點：

### 1. 他們把重點放在建立習慣，而不是追求數字

成功者不會說「我要瘦10公斤」，而是說「我要建立健康的生活方式」。他們專注於：

- 建立規律的用餐時間
- 學會選擇營養豐富的食物
- 培養適合自己的運動習慣
- 發展健康的壓力管理方式

### 2. 他們採用漸進式改變

成功者不會一夜之間改變所有習慣。他們會：

- 一次只改變一個習慣
- 給身體和心理適應的時間
- 慶祝小小的進步
- 把挫折當作學習機會

### 3. 他們學會傾聽身體的聲音

成功者不會盲目遵循外在的規則，而是學會：

- 區分真正的飢餓和情緒性進食
- 感受身體對不同食物的反應
- 尊重身體的需求和限制
- 在滿足和過度之間找到平衡

### 4. 他們建立了支持系統

成功者很少是孤軍奮戰。他們會：

- 尋找志同道合的夥伴
- 向專業人士尋求指導
- 與家人朋友分享目標
- 在困難時尋求幫助

### 5. 他們把健康放在第一位

最重要的是，成功者明白瘦身只是健康生活的副產品。他們的目標不是為了符合某個體重標準，而是為了：

- 擁有更多精力
- 改善健康指標
- 提升生活品質
- 增強自信心

## ABC瘦身法：讓你成為那5%

ABC瘦身法正是基於這些成功者的經驗而設計的。我們不追求快速減重，而是幫助你建立可持續一輩子的健康習慣。

### A - Add（增加）
增加對身體有益的食物和習慣，而不是一味地限制和剝奪。

### B - Build（建立）
建立適合你生活方式的健康習慣，讓改變變得自然而然。

### C - Cancel（取消）
逐步取消對身體有害的習慣，但不會讓你感到被剝奪。

## 真實學員見證

讓我分享一位學員的故事。小慧是一位三期學員，她曾經嘗試過無數減肥方法都失敗了。

「以前我總是想要快速見效，試過各種極端方法，但都以復胖收場。加入ABC瘦身法後，我學會了耐心和自我接納。現在的我不只瘦了，更重要的是我找回了對生活的控制感。」

小慧的改變不只是體重數字，更是整個人生態度的轉變。她從一個總是與食物和體重戰鬥的人，變成了一個能夠享受健康生活的人。

## 開始你的改變之旅

如果你已經厭倦了減肥復胖的惡性循環，如果你想成為那5%的成功者，那麼現在就是開始的時候。

記住，真正的改變需要時間，但每一個小小的進步都值得慶祝。你不需要完美，你只需要開始。

時間和健康，都是最珍貴的成本。

而那些已經開始的人，已經在享受健康改變的快樂了。`
    },
    'ozempic-cost': {
      title: '花10萬打瘦瘦針，停藥後復胖...這真的是你要的瘦嗎？',
      category: '經濟考量',
      readTime: '6分鐘閱讀',
      content: `昨天在社群上看到一位媽媽的無奈分享，讓我心情很沉重。

她說：「<span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">花了10萬打瘦瘦針，3個月瘦了8公斤</span>，當時覺得終於找到救星了。但<span style="color: #f44336; font-weight: bold;">停藥半年後，體重不只全部回來，還多了2公斤</span>...現在看著鏡子裡的自己，覺得比以前更胖、更絕望。最可怕的是，我發現自己已經<span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">離不開這個藥了，一想到要停藥就恐慌</span>。」

這讓我想問：<span style="color: #f44336; font-weight: bold; font-size: 1.1em;">這真的是你要的瘦嗎？</span>

如果瘦身的代價是<span style="color: #f44336;">停藥後更嚴重的復胖</span>、<span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">每個月1萬6的經濟壓力</span>、還有<span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">對藥物的心理依賴</span>...這樣的瘦，真的值得嗎？

## 我理解你的選擇

我知道，選擇瘦瘦針的你，一定經歷過太多次的減肥失敗。

也許你是那個已經節制飲食卻依然瘦不下來的人。就像我們的學員雅文曾經說過：

<div style="border-left: 4px solid #2196f3; background-color: #e3f2fd; padding: 12px; margin: 16px 0; border-radius: 4px;">
「以前我覺得自己已經吃的很節制，最愛喝的珍奶一個月只限制自己喝1杯...但是但是！這樣體重也沒變瘦！」
</div>

你是不是也有同樣的困惑？<span style="color: #f44336; font-weight: bold;">明明已經很努力控制了，為什麼體重就是不動？</span>

也許你是那個工作壓力大、生活忙碌的職場人，每天被工作追著跑，根本沒時間好好照顧自己。看到瘦瘦針的廣告，心想：<span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">「終於有一個不用改變生活方式就能瘦的方法了！」</span>

也許你是那個已經嘗試過無數次減肥的「資深減肥者」，從斷食到代餐，從生酮到運動，每一種方法都試過，卻總是在復胖的循環中打轉。當聽到瘦瘦針時，你想：<span style="color: #f44336; font-weight: bold;">「這次一定要成功！」</span>

我完全理解這種心情。當你已經嘗試過所有方法都失敗時，瘦瘦針看起來就像是最後的救命稻草。

但是，親愛的，我必須告訴你一個殘酷的真相：<span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">依賴外物的瘦身，永遠不會是真正的解決方案。</span>

## 真正的瘦身智慧

真正的瘦身，不是靠外力強迫身體改變，而是<span style="background-color: #4caf50; color: white; padding: 2px 4px; border-radius: 3px;">喚醒身體本來就有的智慧</span>。

什麼是身體的智慧？就是當你的身體營養充足、代謝正常時，它會自然地告訴你什麼該吃、什麼不該吃、什麼時候該停止進食。

這就是ABC瘦身法和瘦瘦針最大的差別：

### <span style="color: #f44336;">瘦瘦針是「強迫身體不想吃」</span>
- 透過藥物抑制食慾中樞
- 身體被迫減少進食量
- <span style="color: #f44336; font-weight: bold;">停藥後身體反彈更嚴重</span>
- 沒有學會正確的飲食方式

### <span style="color: #4caf50;">ABC瘦身法是「讓身體自然不想吃不健康的食物」</span>
- 透過正確營養讓身體滿足
- 身體自然選擇健康食物
- <span style="background-color: #4caf50; color: white; padding: 2px 4px; border-radius: 3px;">建立可持續一輩子的習慣</span>
- 學會傾聽身體的聲音

這不是理論，而是我們無數學員親身驗證的真實經驗。

當你開始傾聽身體的聲音，做對身體最好的選擇時，你會發現一個神奇的現象：<span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">你不再需要用意志力對抗食慾，因為你的身體會自然地引導你做出正確的選擇。</span>

## 真實案例分享

讓我分享幾位學員的真實經驗，她們的改變會讓你重新思考什麼是真正的瘦身。

雅文跟著我們調整飲食後發現：

<div style="border-left: 4px solid #4caf50; background-color: #e8f5e8; padding: 12px; margin: 16px 0; border-radius: 4px;">
「跟著營養師調整飲食以後，早餐可以吃我喜歡的吐司、飯糰，也試著學習吃好的澱粉。」
</div>

她從節制飲食到建立生活方式的轉變，讓她終於擺脫了反覆減肥失敗的痛苦。

另一位學員小美分享：

<div style="border-left: 4px solid #9c27b0; background-color: #f3e5f5; padding: 12px; margin: 16px 0; border-radius: 4px;">
「以前我總是在節食和暴食之間擺盪，現在我學會了傾聽身體的需求。當我給身體足夠的營養時，我發現自己自然就不會想吃垃圾食物了。」
</div>

## 瘦瘦針的隱藏成本

讓我們來算一筆帳。瘦瘦針的成本不只是金錢：

### <span style="color: #ff9800; font-weight: bold;">經濟成本</span>
- <span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">每月1萬6的藥費</span>
- <span style="color: #f44336; font-weight: bold;">一年就是19萬2千元</span>
- 停藥復胖後需要重新開始
- 心理依賴導致的長期費用

### <span style="color: #f44336; font-weight: bold;">健康成本</span>
- 營養不足的風險
- 消化系統副作用
- <span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">心理依賴問題</span>
- <span style="color: #f44336; font-weight: bold;">停藥後更嚴重的復胖</span>

### <span style="color: #9c27b0; font-weight: bold;">機會成本</span>
- 錯過學習正確飲食的機會
- 沒有建立健康的生活習慣
- 浪費了真正改變的時間
- <span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">對身體智慧的不信任</span>

## 給正在考慮瘦瘦針的你

如果你正在考慮瘦瘦針，我想請你先問自己幾個問題：

1. 你準備好一輩子依賴藥物嗎？
2. 你有足夠的經濟能力長期負擔嗎？
3. 你願意承擔未知的健康風險嗎？
4. 你真的不相信自己的身體有自癒的能力嗎？

如果這些問題讓你猶豫，那麼也許是時候考慮一個更根本、更可持續的解決方案了。

## ABC瘦身法：真正的解決方案

ABC瘦身法不是要你依賴任何外在的工具或藥物，而是要幫你重新連結自己的身體智慧。

我們相信每個人的身體都有自我調節的能力，只要給它正確的營養和關愛，它就會回報你健康和理想的體重。

這不是快速的解決方案，但它是唯一可持續的解決方案。

當你學會了ABC瘦身法，你就擁有了一輩子的健康工具。你不需要依賴任何人或任何產品，因為你已經成為了自己最好的營養師和健康教練。

## 時間和健康，都是最珍貴的成本

每多等一個月，就是多一個月的不快樂。

每多用一種傷身方法，身體就多受一次傷害。

時間和健康，都是最珍貴的成本。

而那些已經開始的人，已經在享受健康改變的快樂了。

如果小美的故事觸動了你，如果你也想要真正的健康改變，如果你相信身體健康比快速瘦身更重要，那麼，是時候為自己做一個正確的決定了。

讓我們陪你走一條安全、健康、可持續的路。`
    },
    'body-wisdom': {
      title: '瘦瘦針讓你瘦了，但你的身體還認識你嗎？',
      category: '身體智慧',
      readTime: '7分鐘閱讀',
      content: `昨天我在社群上看到一位女性分享她打瘦瘦針的經驗，她說：

<div style="border-left: 4px solid #f44336; background-color: #ffebee; padding: 12px; margin: 16px 0; border-radius: 4px;">
「我現在吃一點點就飽了，但總覺得<span style="color: #f44336; font-weight: bold;">這種飽不是真的飽，好像胃被什麼東西堵住了一樣</span>。有時候明明應該餓了，但身體卻沒有任何感覺，<span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">就像失去了飢餓的能力</span>。最可怕的是，我開始<span style="color: #f44336; font-weight: bold;">分不清楚什麼時候是真的想吃，什麼時候只是藥物在控制我</span>。」
</div>

這段話讓我想起了我們ABC瘦身法的一位學員佩如，她曾經說過：

<div style="border-left: 4px solid #4caf50; background-color: #e8f5e8; padding: 12px; margin: 16px 0; border-radius: 4px;">
「<span style="background-color: #4caf50; color: white; padding: 2px 4px; border-radius: 3px;">身體會慢慢跟你說，他想要什麼、不想要什麼。</span>」
</div>

同樣是瘦身，為什麼會有這麼大的差別？

## 當身體失去自己的聲音

我太懂那種感覺了。

當你依賴外力讓身體快速改變時，你的身體其實是<span style="color: #f44336; font-weight: bold;">被迫的、是困惑的</span>。它不知道發生了什麼事，只知道<span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">突然不想吃東西了，突然胃口變小了，突然體重掉了</span>。

但這種「突然」，真的是你的身體想要的嗎？

我遇過太多這樣的案例：

<div style="border-left: 4px solid #ff9800; background-color: #fff3e0; padding: 12px; margin: 16px 0; border-radius: 4px;">
打瘦瘦針的時候，體重確實下降很快，<span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">一個月可能瘦8-10公斤</span>。但停藥後呢？<span style="color: #f44336; font-weight: bold;">身體就像彈簧一樣反彈回來，而且往往比之前更胖</span>。
</div>

更可怕的是，經歷過這種「被迫瘦身」的身體，會變得更加混亂。它不知道什麼是正常的飢餓感，不知道什麼是真正的飽足感，甚至連<span style="background-color: #f44336; color: white; padding: 2px 4px; border-radius: 3px;">基本的新陳代謝都可能被打亂</span>。

你花了<span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">5-10萬</span>，得到的是一個<span style="color: #f44336; font-weight: bold;">更加困惑、更難瘦下來的身體</span>。

<span style="color: #f44336; font-weight: bold; font-size: 1.1em;">這真的是你要的嗎？</span>

## 身體智慧 vs 藥物控制

讓我用一個比喻來解釋這個差別：

### <span style="color: #f44336;">瘦瘦針就像是給身體戴上了一個「控制器」</span>

想像你的身體是一台精密的機器，它有自己的運作邏輯和節奏。瘦瘦針就像是<span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">強行給這台機器裝上一個外部控制器，強迫它按照藥物的指令運作</span>。

- <span style="color: #f44336;">藥物說「不餓」，身體就不餓</span>
- <span style="color: #f44336;">藥物說「飽了」，身體就飽了</span>
- <span style="color: #f44336;">藥物說「不想吃」，身體就不想吃</span>

但問題是，<span style="background-color: #f44336; color: white; padding: 2px 4px; border-radius: 3px;">這個控制器一旦移除，身體就會完全失去方向</span>。它已經忘記了如何自然地感受飢餓和飽足，忘記了如何選擇對自己有益的食物。

### <span style="color: #4caf50;">ABC瘦身法則是幫助身體重新找回自己的智慧</span>

我們不是要控制你的身體，而是要<span style="background-color: #4caf50; color: white; padding: 2px 4px; border-radius: 3px;">幫助你的身體重新學會如何正確運作</span>。

當你給身體正確的營養，當你學會傾聽身體的需求，當你建立健康的生活節奏時，你會發現一個神奇的現象：

- <span style="color: #4caf50; font-weight: bold;">身體會自然地告訴你什麼時候餓了</span>
- <span style="color: #4caf50; font-weight: bold;">身體會自然地告訴你什麼時候飽了</span>
- <span style="color: #4caf50; font-weight: bold;">身體會自然地渴望對它有益的食物</span>
- <span style="color: #4caf50; font-weight: bold;">身體會自然地排斥對它有害的東西</span>

這不是藥物的控制，這是<span style="background-color: #4caf50; color: white; padding: 2px 4px; border-radius: 3px;">身體本來就有的智慧</span>。

## 真實學員的身體智慧覺醒

讓我分享幾位學員的真實經驗：

### 佩如的故事

<div style="border-left: 4px solid #2196f3; background-color: #e3f2fd; padding: 12px; margin: 16px 0; border-radius: 4px;">
「剛開始的時候，我完全不知道什麼是真正的飢餓感。我習慣了按時間吃飯，習慣了吃到撐，習慣了用食物來處理情緒。

但跟著ABC瘦身法學習後，我開始慢慢感受到身體的聲音。現在我知道什麼時候是真的餓了，什麼時候只是嘴饞。我知道吃到什麼程度是剛好的，什麼時候應該停下來。

最神奇的是，<span style="background-color: #4caf50; color: white; padding: 2px 4px; border-radius: 3px;">我的身體開始自動選擇健康的食物</span>。以前我看到甜食就忍不住，現在我的身體會告訴我：『這個對我不好，我不想要。』」
</div>

### 小雯的轉變

<div style="border-left: 4px solid #9c27b0; background-color: #f3e5f5; padding: 12px; margin: 16px 0; border-radius: 4px;">
「我以前總是在<span style="color: #f44336; font-weight: bold;">節食和暴食之間擺盪</span>。節食的時候痛苦地忍耐，一旦破戒就瘋狂地吃，然後又陷入罪惡感。

學習ABC瘦身法後，我發現<span style="background-color: #4caf50; color: white; padding: 2px 4px; border-radius: 3px;">我不需要再和食物戰鬥了</span>。當我給身體足夠的營養時，它自然就不會渴望垃圾食物。當我學會傾聽身體的聲音時，我自然就知道什麼時候該停止進食。

現在的我，終於和我的身體成為了朋友，而不是敵人。」
</div>

## 瘦瘦針讓你失去的不只是金錢

當你選擇瘦瘦針時，你失去的不只是每個月1萬6的費用，你失去的是：

### 1. 身體的自然智慧
你的身體忘記了如何自然地感受飢餓和飽足，忘記了如何選擇對自己有益的食物。

### 2. 學習的機會
你錯過了學習正確飲食的機會，錯過了建立健康習慣的機會。

### 3. 自信和自主權
你變得依賴外在的工具，而不相信自己的身體有自我調節的能力。

### 4. 長期的健康
藥物的副作用和營養不足的風險，可能對你的長期健康造成影響。

### 5. 真正的快樂
當你總是擔心停藥後的復胖，當你總是依賴藥物來維持體重時，你很難真正享受生活的快樂。

## 重新連結你的身體智慧

如果你已經使用了瘦瘦針，不要絕望。身體的智慧是可以重新喚醒的。

如果你正在考慮瘦瘦針，請給自己一個機會，先嘗試重新連結你的身體智慧。

ABC瘦身法不是要你依賴任何外在的工具，而是要幫你重新發現你身體本來就有的能力。

當你學會傾聽身體的聲音，當你學會給身體它真正需要的營養，當你學會尊重身體的節奏時，你會發現：

你不需要任何藥物，你的身體就是最好的減重教練。

## 給身體一個重新認識你的機會

你的身體比你想像的更聰明，更有智慧。它知道什麼對它好，什麼對它不好。它知道什麼時候需要休息，什麼時候需要活動。它知道什麼時候需要營養，什麼時候已經足夠。

但前提是，你要給它一個機會，讓它重新認識你，讓你重新認識它。

不要讓藥物成為你和身體之間的阻礙。不要讓外在的控制取代了內在的智慧。

給你的身體一個機會，給你自己一個機會，重新建立一個健康、和諧、可持續的關係。

這不是一個快速的過程，但它是一個值得的過程。

因為當你重新連結了身體的智慧，你得到的不只是理想的體重，你得到的是一輩子的健康和快樂。`
    },
    'doctor-warning': {
      title: '醫生緊急警告：瘦瘦針讓你失去了什麼？',
      category: '醫學警告',
      readTime: '9分鐘閱讀',
      content: `一項最新研究讓醫學界震驚了。英國Asda Online Doctor針對瘦瘦針使用者進行的調查發現：<span style="background-color: #f44336; color: white; padding: 2px 4px; border-radius: 3px;">37%的使用者擔心自己營養不足</span>；<span style="color: #f44336; font-weight: bold;">52%的人每週會跳過好幾次正餐</span>，更驚人的是，<span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">31%的人根本不知道在使用瘦瘦針期間應該吃什麼</span>。

Dr. Crystal Wyllie醫生發出緊急警告：「<span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">許多患者在飢餓信號改變時難以攝取足夠的蛋白質和必需營養素，維持適當營養對長期健康至關重要</span>。」

這讓我想問：為了瘦身，你願意失去健康嗎？為了快速的體重下降，你願意失去身體的智慧嗎？當醫生都在警告瘦瘦針的營養風險時，你還要繼續相信「<span style="color: #f44336; font-weight: bold;">打一針就能瘦</span>」的神話嗎？

## 被廣告遮蔽的真相

我知道，選擇瘦瘦針的你，一定是那些被廣告吸引了的人。看到瘦瘦針的廣告心想：「<span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">終於有一個不用改變生活方式就能瘦的方法了</span>！」

你以為打一針就能解決所有問題，卻沒想過會面臨營養不足的風險。當你看到身邊用瘦瘦針成功的人，你想：「<span style="color: #f44336; font-weight: bold;">這次一定要成功！</span>」但你有想過停藥後會發生什麼嗎？

當聽到瘦瘦針時，你親愛的，我必須告訴你一個殘酷的真相：<span style="background-color: #f44336; color: white; padding: 2px 4px; border-radius: 3px;">那些廣告不會告訴你的風險，正在悄悄侵蝕你的健康</span>。身體被藥物強迫不想吃東西時，你同時也失去了學習正確飲食的機會。

也許你是那個看到身邊朋友使用瘦瘦針成功的人，你羨慕她們快速的體重下降，卻沒看到她們私下的困擾：不知道該吃什麼、擔心營養不足、經常跳餐、甚至出現消化不良、腹脹、便秘等副作用。

我完全理解這種心情。當你看到瘦瘦針的「神奇效果」時，很容易被表面的數字變化迷惑，而忽略了身體正在失去的東西。

但是，親愛的，我必須告訴你一個殘酷的真相：瘦瘦針讓你失去的，遠比你想像的更多。

## 醫學研究揭露的驚人真相

讓我們來看看醫學研究發現的事實：

### <span style="color: #f44336; font-weight: bold;">營養不足的風險</span>

英國最新研究顯示：
- <span style="background-color: #f44336; color: white; padding: 2px 4px; border-radius: 3px;">**37%的使用者擔心營養不足**</span>：這不是無謂的擔心，而是真實的風險
- <span style="color: #f44336; font-weight: bold;">**52%的人經常跳餐**</span>：當食慾被強制抑制時，很多人根本吃不下正常的餐點
- <span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">**31%的人不知道該吃什麼**</span>：藥物改變了飢餓信號，讓人失去了對食物的正常判斷

### <span style="color: #ff9800; font-weight: bold;">消化系統副作用</span>

臨床研究發現，瘦瘦針使用者常見的副作用包括：
- <span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">**噁心和嘔吐**：高達20-30%的使用者會經歷</span>
- **腹瀉或便秘**：消化系統功能紊亂
- **腹脹和胃痛**：胃排空延遲導致的不適
- **胃食道逆流**：長期使用可能加重消化道問題

### <span style="color: #9c27b0; font-weight: bold;">心理依賴問題</span>

更嚴重的是心理層面的影響：
- <span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">**對藥物的依賴**：害怕停藥後復胖</span>
- **飲食行為混亂**：失去對正常飢餓感的認知
- <span style="color: #f44336; font-weight: bold;">**自信心下降**：不相信自己有控制體重的能力</span>
- **焦慮和恐慌**：擔心停藥後的後果

## 瘦瘦針讓你失去的五樣珍貴東西

### <span style="color: #f44336;">1. 營養均衡的能力</span>

當你的食慾被藥物強制抑制時，你很難攝取到身體所需的完整營養。<span style="background-color: #ff9800; color: white; padding: 2px 4px; border-radius: 3px;">蛋白質不足、維生素缺乏、礦物質失衡</span>...這些都會對你的長期健康造成影響。

### <span style="color: #f44336;">2. 身體的自然智慧</span>

你的身體本來知道什麼時候餓、什麼時候飽、需要什麼營養。但<span style="background-color: #f44336; color: white; padding: 2px 4px; border-radius: 3px;">瘦瘦針打亂了這些自然信號，讓你失去了與身體溝通的能力</span>。

### <span style="color: #f44336;">3. 學習健康生活的機會</span>

真正的健康瘦身需要學習正確的飲食方式、建立良好的生活習慣。但當你依賴藥物時，<span style="color: #f44336; font-weight: bold;">你錯過了這些寶貴的學習機會</span>。

### <span style="color: #ff9800;">4. 經濟自由</span>

<span style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">每個月1萬6的費用，一年就是19萬2千元</span>。更可怕的是，這可能是一個無底洞，因為<span style="color: #f44336; font-weight: bold;">停藥就復胖，你可能需要終身依賴</span>。

### <span style="color: #9c27b0;">5. 內心的平靜</span>

當你總是擔心停藥後的復胖，當你總是依賴外在的工具來維持體重時，<span style="background-color: #9c27b0; color: white; padding: 2px 4px; border-radius: 3px;">你很難真正享受內心的平靜和自信</span>。

## ABC瘦身法：醫生認可的健康方案

作為營養專業人士，我們深知健康瘦身的重要性。ABC瘦身法不是要你依賴任何藥物或外在工具，而是要幫你重建身體的自然平衡。

### A - Add（增加）
增加身體真正需要的營養，而不是剝奪和限制。

### B - Build（建立）
建立可持續一輩子的健康習慣，而不是短期的極端改變。

### C - Cancel（取消）
逐步取消對身體有害的習慣，但不會讓你感到被剝奪。

## 真實案例：從瘦瘦針到健康瘦身

讓我分享一位學員的故事。小琳曾經使用瘦瘦針6個月，瘦了12公斤，但停藥後3個月就復胖了15公斤。

「那段時間我真的很絕望，」小琳說，「我花了將近10萬元，結果比之前更胖。更可怕的是，我的身體變得很奇怪，不知道什麼時候該吃飯，吃什麼都沒有滿足感。」

後來小琳加入了ABC瘦身法：

「剛開始我很懷疑，因為ABC瘦身法要我正常吃飯，甚至要我增加一些營養。但慢慢地，我發現我的身體開始恢復正常的飢餓感和飽足感。

現在的我，不只瘦回了理想體重，更重要的是我重新學會了如何照顧自己的身體。我不再害怕食物，也不再依賴任何外在的工具。」

## 醫生的建議：選擇可持續的健康方案

如果你正在考慮瘦瘦針，我建議你先問自己幾個問題：

1. **你準備好承擔營養不足的風險嗎？**
2. **你有足夠的經濟能力長期負擔嗎？**
3. **你願意失去身體的自然智慧嗎？**
4. **你真的不相信自己有健康瘦身的能力嗎？**

如果這些問題讓你猶豫，那麼也許是時候考慮一個更安全、更可持續的解決方案了。

## 給你的身體一個自然康復的機會

你的身體比你想像的更有智慧，更有自癒的能力。它不需要外在的藥物來告訴它什麼時候餓、什麼時候飽。

它需要的是正確的營養、適當的運動、充足的休息，以及你的信任和耐心。

不要讓短期的體重變化蒙蔽了你對長期健康的判斷。不要讓廣告的承諾取代了醫學的警告。

給你的身體一個機會，給你自己一個機會，選擇一條真正健康、可持續的道路。

## 時間和健康，都是最珍貴的成本

每多等一個月，就是多一個月的健康風險。

每多用一種可能傷身的方法，身體就多受一次傷害。

時間和健康，都是最珍貴的成本。

而那些已經選擇健康道路的人，已經在享受真正的健康和快樂了。

如果醫生的警告讓你重新思考，如果你也想要真正的健康改變，如果你相信身體的自然智慧比藥物的控制更可靠，那麼，是時候為自己做一個明智的決定了。

讓我們陪你走一條安全、健康、可持續的路。`
    }
  }

  useEffect(() => {
    if (articleId && articles[articleId]) {
      setArticle(articles[articleId])
      setLoading(false)
    }
  }, [articleId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">載入中...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">文章不存在</h1>
          <Button onClick={onBack} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首頁
          </Button>
        </div>
      </div>
    )
  }

  const renderArticleContent = (content) => {
    // 將HTML內容轉換為JSX組件
    const processContent = (htmlContent) => {
      // 分割內容為段落
      const paragraphs = htmlContent.split('\n\n').filter(p => p.trim())
      
      return paragraphs.map((paragraph, index) => {
        // 處理標題
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-gray-800 mb-6 mt-8">
              {paragraph.replace('## ', '')}
            </h2>
          )
        }
        
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-semibold text-gray-800 mb-4 mt-6">
              {paragraph.replace('### ', '')}
            </h3>
          )
        }
        
        // 處理帶有HTML標籤的段落（包括style屬性）
        if (paragraph.includes('<span') || paragraph.includes('<div') || paragraph.includes('</span>') || paragraph.includes('</div>') || paragraph.includes('style=')) {
          return (
            <div key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: paragraph }} />
          )
        }
        
        // 處理普通段落
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
            {paragraph}
          </p>
        )
      })
    }
    
    return <div className="space-y-4">{processContent(content)}</div>
  }

  const handleContactUs = () => {
    window.open('https://lin.ee/ApHSqCU', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button onClick={onBack} variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              返回首頁
            </Button>
            <div className="text-sm text-gray-600">
              {article.readTime}
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-pink-500 to-green-500 text-white p-8">
            <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-4">
              {article.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <span>{article.readTime}</span>
              <span>•</span>
              <span>ABC瘦身法專業觀點</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              {renderArticleContent(article.content)}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-50 to-green-50 p-8 border-t">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                想了解ABC瘦身法嗎？
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                如果這篇文章對你有幫助，如果你也想要健康、可持續的瘦身方法，
                歡迎聯繫我們的專業團隊，讓我們陪你走一條安全、有效的健康之路。
              </p>
              <Button 
                onClick={handleContactUs}
                className="bg-gradient-to-r from-pink-500 to-green-500 hover:from-pink-600 hover:to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                立即聯繫我們
              </Button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default ArticlePage

