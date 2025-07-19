import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, Target, CheckCircle, Star, ArrowRight, Shield, Clock, Award, Wrench, Plus, Hammer, X, Utensils, PartyPopper, Frown, Plane, Menu } from 'lucide-react'
import './App.css'

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // 學員見證數據
  const testimonials = [
    {
      name: "小雨",
      age: 41,
      background: "30年減肥史",
      quote: "我自嘲自己最瘦的時候就是受精卵時期，這些方法理所當然的通通失敗了。",
      result: "終於找到可持續的方法",
      type: "反覆減肥失敗型"
    },
    {
      name: "小慧",
      age: 41,
      background: "三期學員班長",
      quote: "我們要的是瘦一輩子，而不是瘦一陣子。第一次覺得減重居然可以開心地進行。",
      result: "從恐懼運動到熱愛運動",
      type: "長期成功見證型"
    },
    {
      name: "小維",
      age: 35,
      background: "上班族",
      quote: "我現在很少胃酸逆流了，睡眠品質也變好了，整個人的精神狀態都不一樣了。",
      result: "胃食道逆流大幅改善",
      type: "健康改善型"
    },
    {
      name: "小魚",
      age: 31,
      background: "護理師",
      quote: "我每天照顧病人，卻連自己的健康都顧不好。夜班結束後，我就想大吃一頓。",
      result: "學會在不規律作息中維持健康",
      type: "職場壓力型"
    },

    {
      name: "Sam",
      age: 44,
      background: "工程師",
      quote: "我不能倒下，家人還需要我。我必須為家人的未來負責。",
      result: "三高指標明顯改善",
      type: "中年健康危機型"
    }
  ]

  // 痛點數據
  const painPoints = [
    {
      icon: "😔",
      title: "第N次減肥失敗",
      description: "我是不是永遠都好不了？",
      detail: "試過無數方法，每次都以復胖收場"
    },
    {
      icon: "⚠️",
      title: "健康警訊響起",
      description: "為什麼以前可以隨便吃，現在就不行了？",
      detail: "體檢報告滿江紅，擔心未來健康"
    },
    {
      icon: "😰",
      title: "產後身材走樣",
      description: "為什麼別的媽媽可以瘦回來，我卻不行？",
      detail: "照顧孩子沒時間，看鏡子就沮喪"
    },
    {
      icon: "😫",
      title: "工作壓力暴食",
      description: "吃東西是我唯一的快樂",
      detail: "壓力大時只能靠食物紓壓"
    },
    {
      icon: "🔄",
      title: "溜溜球效應",
      description: "減肥→復胖→再減肥→再復胖",
      detail: "陷入無止境的惡性循環"
    },
    {
      icon: "💔",
      title: "自信心崩潰",
      description: "我的時間都不是我的",
      detail: "總是把自己排在最後一位"
    }
  ]

  // ABC理念特色
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "健康優先",
      description: "不只是減重，更是全面的健康改善",
      details: ["改善慢性疾病", "提升精神狀態", "增強體力活力"]
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "可持續性",
      description: "養成一輩子的健康習慣",
      details: ["不極端節食", "不過度運動", "生活方式改變"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "專業指導",
      description: "個人化的專業陪伴",
      details: ["營養師指導", "運動教練", "心理支持"]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "科學方法",
      description: "基於科學研究的系統性方法",
      details: ["營養均衡", "代謝優化", "荷爾蒙平衡"]
    }
  ]

  // 與市面方法對比
  const comparisons = [
    {
      aspect: "目標",
      abc: "長期健康改善",
      others: "快速減重"
    },
    {
      aspect: "方法",
      abc: "系統性生活方式改變",
      others: "極端節食或運動"
    },
    {
      aspect: "效果",
      abc: "可持續不復胖",
      others: "短期見效易復胖"
    },
    {
      aspect: "過程",
      abc: "開心進行有支持",
      others: "痛苦忍耐孤軍奮戰"
    },
    {
      aspect: "結果",
      abc: "身心靈全面提升",
      others: "單純體重下降"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* 導航欄 */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-rose-500" />
              <a href="#founder-story" className="text-2xl font-bold text-gray-800 hover:text-rose-500 transition-colors cursor-pointer">ABC瘦身法</a>
            </div>
            
            {/* 桌面版導航 */}
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-rose-500 transition-colors">理念</a>
              <a href="#testimonials" className="text-gray-600 hover:text-rose-500 transition-colors">學員見證</a>
              <a href="#features" className="text-gray-600 hover:text-rose-500 transition-colors">課程特色</a>
              <a href="#contact" className="text-gray-600 hover:text-rose-500 transition-colors">聯繫我們</a>
            </div>
            
            {/* 手機版重要連結 + 選單按鈕 */}
            <div className="md:hidden flex items-center space-x-4">
              <a 
                href="#single-mom-story" 
                className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
              >
                學員見證
              </a>
              <button 
                className="p-2 text-gray-600 hover:text-rose-500 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* 手機版下拉選單 */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-rose-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  理念
                </a>
                <a 
                  href="#features" 
                  className="text-gray-600 hover:text-rose-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  課程特色
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-rose-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  聯繫我們
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 創辦者故事橫幅 */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">
              創辦者故事
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              從月半子到幫助<span className="text-rose-500">3000+人</span>成功減重
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              愛情的力量，讓我找到<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">人生最後一次減重</span>的秘密
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full font-semibold">
                🍽️ 吃飽也能瘦
              </span>
              <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                ⏰ 瘦一輩子而不只是瘦一陣子
              </span>
              <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                🎯 最後一次瘦身
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左側：創辦者故事 */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">我的故事</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-rose-600">過去的我：</strong>
                    總覺得反正我就是個月半子，每天大吃大喝就是我宣洩壓力的方式。
                    但內心深處，我知道自己其實是不開心的...
                  </p>
                  <p>
                    <strong className="text-blue-600">痛苦的循環：</strong>
                    我曾經用過無數方法減肥，市售減重產品、針灸、三餐蘋果、激烈斷食，
                    但錯誤的方式讓我反覆失敗，體重甚至變得更重！
                  </p>
                  <p>
                    <strong className="text-green-600">轉折點：</strong>
                    直到某天一個天使走進我的生命中，讓我燃起認真減肥的動力。
                    我半開玩笑地跟她說：如果能成功減到一定的數字，陪我吃一頓飯。
                  </p>
                  <p className="text-lg font-semibold text-purple-600">
                    沒想到！我做到了，而且<span className="text-rose-500">一陪就是20年</span>。
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-blue-50 rounded-2xl p-6 border border-rose-200">
                <h4 className="text-lg font-bold text-gray-800 mb-3">我的使命</h4>
                <p className="text-gray-700 leading-relaxed">
                  從此之後，我真心希望將這些心路歷程和方法分享給大家！
                  經過多年研究，我找到有效長久維持的關鍵，
                  已成功幫助 <span className="font-bold text-rose-600">3,000+學員</span> 達成
                  <span className="font-bold text-blue-600"> #人生最後一次減重</span>
                </p>
              </div>
            </div>

            {/* 右側：前後對比照片 */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/founder-transformation.png" 
                  alt="創辦者減重前後對比" 
                  className="rounded-2xl shadow-2xl max-w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-bold text-lg">-25kg</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-6 italic">
                "你不需要再逼自己使用極端方法，也不需要再為一次又一次失敗羞愧。
                你需要的，是一次正確的開始。"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3"
                  onClick={() => window.open('https://lin.ee/ApHSqCU', '_blank')}
                >
                  立即聯繫我們
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50 px-8 py-3"
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                  了解ABC瘦身法
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 痛點共鳴區 */}
      <section id="pain-points" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              你是不是也有這些困擾？
            </h2>
            <p className="text-xl text-gray-600">
              你並不孤單，我們理解你的感受
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-rose-500">
                <CardHeader>
                  <div className="text-4xl mb-2">{point.icon}</div>
                  <CardTitle className="text-xl text-gray-800">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-rose-600 font-medium mb-2 italic">
                    "{point.description}"
                  </p>
                  <p className="text-gray-600 text-sm">
                    {point.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl text-gray-700 font-medium">
              如果這些話說中了你的心聲，那麼你來對地方了
            </p>
          </div>
        </div>
      </section>

      {/* ABC理念介紹 */}
      <section id="about" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              不是給你魚吃，而是教你釣魚
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              3000+人成功驗證的飲食策略，不是制式菜單
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200 px-4 py-2">
                🎯 最後一次瘦身
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2">
                🍽️ 吃飽也能瘦
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2">
                ⏰ 瘦一輩子不復胖
              </Badge>
            </div>
          </div>
          
          {/* 核心理念卡片 */}
          <div className="mb-16">
            <Card className="p-8 bg-white shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  🤝 你的專屬減重好友團
                </h3>
                <p className="text-lg text-gray-600">
                  我們都胖過，我們懂胖過的苦
                </p>
              </div>
              
              {/* 好友團介紹 */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center p-6 bg-gradient-to-br from-rose-50 to-pink-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-2">👩‍⚕️</div>
                    <CardTitle className="text-xl text-rose-700">營養師好朋友</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">隨時解答飲食疑問</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 這樣吃可以嗎？</li>
                      <li>• 外食怎麼選？</li>
                      <li>• 聚餐怎麼辦？</li>
                      <li>• 想吃甜食時...</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-2">🏃‍♂️</div>
                    <CardTitle className="text-xl text-blue-700">教練好朋友</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">陪你找到適合的運動</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 沒時間運動？</li>
                      <li>• 不會運動？</li>
                      <li>• 身體有限制？</li>
                      <li>• 找到你的節奏</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-2">👨‍🏫</div>
                    <CardTitle className="text-xl text-green-700">一休校長</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">分享20年減重心得</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 從月半子到-25kg</li>
                      <li>• 3000+學員經驗</li>
                      <li>• 溫暖的陪伴</li>
                      <li>• 實用的策略</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* 簡單流程說明 */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  💝 簡單到只需要做一件事
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">分享日常飲食</h4>
                    <p className="text-sm text-gray-600">就像跟好朋友分享今天吃了什麼，不是檢查，是關心</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">獲得溫暖建議</h4>
                    <p className="text-sm text-gray-600">不是監控，是陪伴；不是批評，是建議</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">溫和改變</h4>
                    <p className="text-sm text-gray-600">在不極端改變生活習慣下，讓改變變得自然而然</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* 核心特色 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Heart className="w-8 h-8 text-rose-500" />
                </div>
                <CardTitle className="text-xl">健康優先</CardTitle>
                <CardDescription className="text-gray-600">
                  瘦一輩子，不只是瘦一陣子
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    改善慢性疾病
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    提升精神狀態
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    增強體力活力
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">眾人力量</CardTitle>
                <CardDescription className="text-gray-600">
                  用眾人的智慧和經驗來協助
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    專業團隊指導
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    同期學員支持
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    3000+成功經驗
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">溫和策略</CardTitle>
                <CardDescription className="text-gray-600">
                  不極端改變，應對生活變化
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    從現有習慣開始
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    各種應對策略
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    自然而然改變
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl">科學實證</CardTitle>
                <CardDescription className="text-gray-600">
                  3000+人成功驗證的方法
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    營養均衡
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    代謝優化
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    長期可持續
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 對比表格 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              ABC瘦身法 vs 市面上其他方法
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 text-gray-600">比較項目</th>
                    <th className="text-center py-4 px-4 text-rose-600 font-bold">ABC瘦身法</th>
                    <th className="text-center py-4 px-4 text-gray-500">一般減肥方法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-700">目標</td>
                    <td className="py-4 px-4 text-center text-rose-600 font-medium">瘦一輩子的健康改善</td>
                    <td className="py-4 px-4 text-center text-gray-500">快速減重</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-700">方法</td>
                    <td className="py-4 px-4 text-center text-rose-600 font-medium">飲食策略 + 溫和改變</td>
                    <td className="py-4 px-4 text-center text-gray-500">制式菜單 + 極端節食</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-700">過程</td>
                    <td className="py-4 px-4 text-center text-rose-600 font-medium">好友團陪伴支持</td>
                    <td className="py-4 px-4 text-center text-gray-500">孤軍奮戰痛苦忍耐</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-700">效果</td>
                    <td className="py-4 px-4 text-center text-rose-600 font-medium">可持續不復胖</td>
                    <td className="py-4 px-4 text-center text-gray-500">短期見效易復胖</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-700">理念</td>
                    <td className="py-4 px-4 text-center text-rose-600 font-medium">教你釣魚的策略</td>
                    <td className="py-4 px-4 text-center text-gray-500">給你魚吃的菜單</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg">
                <p className="text-lg font-bold text-rose-700 mb-2">
                  健康瘦身不是少數人的特權，而是所有人都能做到
                </p>
                <p className="text-gray-600">
                  我們用眾人的力量來協助大家，因為我們都胖過，我們懂胖過的苦
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 全線上減重班特色 */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              全線上服務
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🌍 世界各地都能參加的減重班
            </h2>
            <p className="text-xl text-gray-600">
              不限地點，即時支援，溫和有效
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 即時回覆 */}
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">營養師即時回覆</h3>
                <p className="text-gray-600 mb-4">
                  不用等很久才得到回覆，問題立即解答
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• 傳了餐點立即得到建議</p>
                  <p>• 有疑問隨時發問</p>
                  <p>• 專業營養師在線支援</p>
                </div>
              </div>
            </Card>

            {/* 線上運動課 */}
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏃‍♀️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">溫和線上運動課</h3>
                <p className="text-gray-600 mb-4">
                  全直播，種類多樣，有問題即時發問
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• 溫和不激烈的運動</p>
                  <p>• 多種課程選擇</p>
                  <p>• 直播互動即時指導</p>
                </div>
              </div>
            </Card>

            {/* 全球服務 */}
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌏</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">不限地點參加</h3>
                <p className="text-gray-600 mb-4">
                  世界各地都能參加，時區不是問題
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• 海外學員也能參與</p>
                  <p>• 彈性時間安排</p>
                  <p>• 全球華人都適用</p>
                </div>
              </div>
            </Card>
          </div>

          {/* 特色標籤 */}
          <div className="text-center">
            <div className="inline-flex flex-wrap gap-3 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="bg-white/20 px-4 py-2 rounded-full">即時回覆</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">線上直播</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">全球服務</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">溫和運動</span>
            </div>
          </div>
        </div>
      </section>

      {/* 為什麼叫ABC？ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              為什麼叫ABC？
            </h2>
            <p className="text-xl text-gray-600">
              不只是縮寫，是你的隨身減重工具
            </p>
          </div>

          {/* ABC隨身工具系統 */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Wrench className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">🛠️ ABC隨身工具系統</h3>
              <p className="text-lg text-gray-600">
                學員說：「我每天都把ABC帶在身上，使用ABC一輩子」
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* ADD 增加 */}
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-green-50 border-green-200">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Plus className="w-12 h-12 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-600">ADD 增加</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    增加好的飲食習慣
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 營養均衡的食物</li>
                    <li>• 適合的運動習慣</li>
                    <li>• 健康的生活節奏</li>
                    <li>• 正確的營養知識</li>
                  </ul>
                </CardContent>
              </Card>

              {/* BUILD 建立 */}
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Hammer className="w-12 h-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-600">BUILD 建立</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    建立新的生活型態
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 可持續的習慣</li>
                    <li>• 健康的心理狀態</li>
                    <li>• 長期的改變模式</li>
                    <li>• 自信的生活態度</li>
                  </ul>
                </CardContent>
              </Card>

              {/* CANCEL 拿掉 */}
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-red-50 border-red-200">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <X className="w-12 h-12 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl text-red-600">CANCEL 拿掉</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    拿掉不健康的習慣
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 易胖的飲食習慣</li>
                    <li>• 不健康的生活方式</li>
                    <li>• 負面的思維模式</li>
                    <li>• 短期的極端做法</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ABC如何在生活中使用 */}
          <div className="bg-yellow-50 rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                🌟 ABC如何在生活中使用？
              </h3>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* 外食時 */}
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Utensils className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">外食時</h4>
                <p className="text-sm text-gray-600">
                  用ABC選擇策略，任何餐廳都能健康吃
                </p>
              </div>

              {/* 聚餐時 */}
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <PartyPopper className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">聚餐時</h4>
                <p className="text-sm text-gray-600">
                  用ABC應對方法，享受聚餐不怕胖
                </p>
              </div>

              {/* 壓力時 */}
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Frown className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">壓力時</h4>
                <p className="text-sm text-gray-600">
                  用ABC調節技巧，不再用食物紓壓
                </p>
              </div>

              {/* 旅行時 */}
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Plane className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">旅行時</h4>
                <p className="text-sm text-gray-600">
                  用ABC維持習慣，旅行回來不變胖
                </p>
              </div>
            </div>
          </div>

          {/* 學員怎麼說ABC */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              學員怎麼說ABC？
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 學員見證1 */}
            <Card className="bg-pink-50 border-pink-200 p-6">
              <CardContent>
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-pink-700 mb-2">
                    「我每天都把ABC帶在身上」
                  </h4>
                </div>
                <p className="text-gray-700 mb-4">
                  不管是外食、聚餐、出差，我都會想到ABC的策略。它不是課程，是我的生活工具。
                </p>
                <p className="text-sm text-gray-500 text-right">
                  - 小慧，三期學員班長
                </p>
              </CardContent>
            </Card>

            {/* 學員見證2 */}
            <Card className="bg-blue-50 border-blue-200 p-6">
              <CardContent>
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-blue-700 mb-2">
                    「ABC讓我知道怎麼應對各種情況」
                  </h4>
                </div>
                <p className="text-gray-700 mb-4">
                  以前遇到聚餐就放棄，現在用ABC策略，既能享受又不怕胖。這是一輩子受用的方法。
                </p>
                <p className="text-sm text-gray-500 text-right">
                  - 溫溫，文字工作者
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 市場區隔說明 */}
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                為什麼其他方法沒有「隨身工具」概念？
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                因為ABC瘦身法不只是減重方法，更是一套可以帶著走的生活策略
              </p>
              <p className="text-gray-600">
                當你學會ABC，你就擁有了應對任何情況的能力，這就是為什麼學員說「使用ABC一輩子」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 重點成功案例 */}
      <section id="single-mom-story" className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">
              重點成功案例
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              50歲單親媽媽的蛻變之路
            </h2>
            <p className="text-xl text-gray-600">
              從絕望到重新找回自信，她做到了你也可以
            </p>
          </div>
          
          <Card className="p-8 bg-white shadow-xl">
            {/* 故事背景 */}
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">她的故事</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-rose-600">年齡：</span>50歲，生了兩胎後一直瘦不回來
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-rose-600">困擾：</span>試過各種減重方法，總是快速復胖
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-rose-600">痛點：</span>明明吃不多，但小腹越來越大
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-rose-600">轉折：</span>先生突然去世，必須獨自照顧兩個孩子
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-rose-600">動機：</span>要有健康身體才能好好照顧孩子
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-rose-600">目標：</span>找回健康自信，當最亮眼的媽咪
                  </p>
                </div>
              </div>
            </div>
            
            {/* 前後對比 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">驚人的轉變</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* 減重前 */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-600 mb-4">減重前</h4>
                  <div className="space-y-4">
                    <img 
                      src="/student-success-1.jpeg" 
                      alt="減重前的樣子" 
                      className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                    />
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• 只能穿又長又寬的衣服</li>
                        <li>• 需要遮手臂遮肚子</li>
                        <li>• 壓力大愛吃甜食</li>
                        <li>• 健康狀況每況愈下</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* 減重後 */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-rose-600 mb-4">減重後</h4>
                  <div className="space-y-4">
                    <img 
                      src="/student-success-2.jpeg" 
                      alt="減重後的自信樣子" 
                      className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                    />
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <ul className="text-sm text-rose-700 space-y-2">
                        <li>✨ 自信穿合身洋裝</li>
                        <li>✨ 不用再遮手臂肚子</li>
                        <li>✨ 重新找回健康體態</li>
                        <li>✨ 成為孩子的驕傲</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 生活改變 */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">不只是外表，更是生活的改變</h3>
              <img 
                src="/student-success-3.jpeg" 
                alt="與孩子的快樂時光" 
                className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
              />
              <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "我要當最亮眼的媽咪，給孩子一個健康快樂的媽媽"
                </p>
                <p className="text-rose-600 font-semibold">
                  從絕望到希望，從隱藏到自信，她用ABC瘦身法重新找回了自己
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 溫溫的重點成功案例 */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-rose-500 text-white px-4 py-2 text-sm font-medium mb-4">
              重點成功案例
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              文字工作者的覺醒之路
            </h2>
            <p className="text-xl text-gray-600">
              「老公說我這樣剛剛好，我差點就信了！」
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-2xl">
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* 左側：故事內容 */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-2">她的故事</h3>
                    <div className="space-y-2 text-gray-600 text-base md:text-base">
                      <p className="text-base md:text-base"><strong>年齡：</strong>40歲，文字工作者</p>
                      <p className="text-base md:text-base"><strong>困擾：</strong>工作需要三不五時得吃美食，體重一路來到近80公斤</p>
                      <p className="text-base md:text-base"><strong>痛點：</strong>高血壓前期，伴隨慢性身體各處發炎、頭痛、體力差</p>
                      <p className="text-base md:text-base"><strong>轉折：</strong>「不是老公覺得好就好，我也要自己覺得好才行！」</p>
                      <p className="text-base md:text-base"><strong>目標：</strong>重新找回健康自信的自己</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg md:text-lg text-gray-700 italic mb-6 border-l-4 border-rose-200 pl-4">
                    "老公說我這樣剛剛好，我差點就信了！曾經被溫柔的安慰話術麻痺，直到有一天突然人間清醒——要為自己而瘦！"
                  </blockquote>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-4 text-lg md:text-lg">✨ 驚人成果</h4>
                    <div className="grid grid-cols-2 gap-4 text-base md:text-sm">
                      <div className="text-green-700">
                        <p className="font-medium text-base md:text-base">• 體重：80kg → 60kg</p>
                        <p className="font-medium text-base md:text-base">• 體脂：35-37% → 29%</p>
                      </div>
                      <div className="text-green-700">
                        <p className="font-medium text-base md:text-base">• 血壓恢復正常</p>
                        <p className="font-medium text-base md:text-base">• 重新穿回短裙</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 右側：前後對比照片 */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">驚人的轉變</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="relative">
                        <img 
                          src="/wenwen-before.jpg" 
                          alt="溫溫減重前"
                          className="w-full rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Before
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">減重前</p>
                    </div>
                    <div className="text-center">
                      <div className="relative">
                        <img 
                          src="/wenwen-after.jpg" 
                          alt="溫溫減重後"
                          className="w-full rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">減重後</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-4 rounded-lg">
                      <p className="text-lg font-bold text-rose-700">-20公斤</p>
                      <p className="text-sm text-gray-600">3個月健康轉變</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg">
                  <p className="text-lg md:text-lg text-gray-700 italic mb-2">
                    "很幸運，過往沒有什麼嗯哩嗯哩的減肥黑歷史"
                  </p>
                  <p className="text-gray-600 text-base md:text-base">
                    一開始就加入了正確的隊伍，在ABC加法練習下，沒有餓過、虐待過肚子的情況，婚前的小裙子我不僅僅穿下了，而且是「選擇繼續穿下」
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 重點成功案例 - 四寶媽 */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              重點成功案例
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              四寶媽的最後一次瘦身
            </h2>
            <p className="text-xl text-gray-600">
              「我不想再這樣反覆復胖了，這是我最後一次瘦身！」
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-2xl">
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* 左側：故事內容 */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-2">她的故事</h3>
                    <div className="space-y-2 text-gray-600 text-base md:text-base">
                      <p className="text-base md:text-base"><strong>身份：</strong>四寶媽，多次懷孕生產</p>
                      <p className="text-base md:text-base"><strong>困擾：</strong>多年反覆減肥，總是無法瘦下來</p>
                      <p className="text-base md:text-base"><strong>痛點：</strong>腹部肥胖嚴重，壓力大愛吃甜食舒壓</p>
                      <p className="text-base md:text-base"><strong>轉折：</strong>「這是我最後一次瘦身，不想再反覆復胖！」</p>
                      <p className="text-base md:text-base"><strong>目標：</strong>徹底改變生活方式，不再暴飲暴食</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg md:text-lg text-gray-700 italic mb-6 border-l-4 border-purple-200 pl-4">
                    "已經失敗很多次了，我真的不想再這樣一直反覆復胖。這次一定要成功，為了孩子，也為了自己！"
                  </blockquote>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-4 text-lg md:text-lg">✨ 驚人成果</h4>
                    <div className="space-y-2 text-green-700">
                      <p className="font-medium text-base md:text-base">• 腹部明顯縮小，重拾自信</p>
                      <p className="font-medium text-base md:text-base">• 學會健康飲食融入生活</p>
                      <p className="font-medium text-base md:text-base">• 不再需要甜食舒壓</p>
                      <p className="font-medium text-base md:text-base">• 不再擔心暴飲暴食</p>
                    </div>
                  </div>
                </div>
                
                {/* 右側：前後對比照片 */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">震撼的腹部改變</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="relative">
                        <img 
                          src="/IMG_7574.jpeg" 
                          alt="四寶媽減重前"
                          className="w-full rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Before
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">減重前</p>
                    </div>
                    <div className="text-center">
                      <div className="relative">
                        <img 
                          src="/IMG_7575.jpeg" 
                          alt="四寶媽減重後"
                          className="w-full rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">減重後</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                      <p className="text-lg font-bold text-purple-700">腹部明顯縮小</p>
                      <p className="text-sm text-gray-600">3個月健康轉變</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 italic mb-2">
                    "終於不用再擔心會復胖了！"
                  </p>
                  <p className="text-gray-600">
                    在ABC瘦身法的陪伴下，我學會了健康的飲食方式，不再需要靠甜食舒壓。最重要的是，我知道這次的改變是可以持續一輩子的！
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 學員見證 */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              真實學員的轉變故事
            </h2>
            <p className="text-xl text-gray-600">
              他們的故事，也許就是你的未來
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.age}歲 • {testimonial.background}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-600 italic mb-4 border-l-4 border-rose-200 pl-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-700 font-medium text-sm">
                      ✨ {testimonial.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-4">
              這些都是真實的轉變故事，不是完美的成功案例
            </p>
            <p className="text-lg text-gray-600">
              我們相信每個人都有自己的節奏，重要的是開始並堅持下去
            </p>
          </div>
        </div>
      </section>

      {/* 團隊力量展示 */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
              團隊力量
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              因為我們都胖過，所以我們懂你
            </h2>
            <p className="text-xl text-gray-600">
              這群好友加在一起瘦超過300公斤
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative">
              <img 
                src="/班長合照.png" 
                alt="ABC瘦身法班長大合照"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                -300kg+
              </div>
            </div>
            <div className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ABC大家庭的溫暖聚會
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  來自不同地方、不同年紀的我們，都曾經為肥胖所苦。因為ABC瘦身法而相遇，現在成為彼此最珍惜的支持力量。
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h4 className="font-bold text-rose-700 mb-2">共同理念</h4>
                    <p className="text-sm text-gray-600">愛自己，也照顧自己，願意分享經驗支持他人</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">珍貴緣份</h4>
                    <p className="text-sm text-gray-600">因為減重班而變成好友，甚至海外回來的班長都會參加聚會</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-2">集體成果</h4>
                    <p className="text-sm text-gray-600">這群人加在一起瘦超過300公斤，證明ABC瘦身法的威力</p>
                  </div>
                </div>
                <div className="mt-8 bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 italic mb-2">
                    "我們用眾人的力量來協助大家，因為我們都胖過，我們懂胖過的苦"
                  </p>
                  <p className="text-gray-600">
                    健康瘦身不是少數人的特權，而是所有人都能做到
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 課程特色 */}
      <section id="features" className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              為什麼選擇ABC瘦身法？
            </h2>
            <p className="text-xl text-gray-600">
              我們提供的不只是方法，更是一個支持系統
            </p>
          </div>
          
          {/* 創辦者故事 */}
          <div className="mb-16">
            <Card className="p-8 bg-white shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    創辦者的話
                  </h3>
                  <h4 className="text-xl text-rose-600 font-semibold mb-3">
                    肥胖對我來說是珍貴的禮物
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    真正意識到自己要改變，並且行動
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    我也曾經歷過減重的掙扎與挫折，正因為走過這條路，我更能理解每位學員的困擾與需求。
                    ABC瘦身法不只是一套方法，更是我用親身經歷驗證過的健康生活方式。
                  </p>
                  <div className="mt-4 p-4 bg-rose-50 rounded-lg">
                    <p className="text-rose-700 font-medium">
                      "讓我陪伴你，一起找回健康自信的自己"
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <img 
                    src="/founder-story.png" 
                    alt="創辦者減重歷程" 
                    className="w-full max-w-md mx-auto rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    休校長減重歷程
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center">
                  <Award className="w-8 h-8 text-yellow-500 mr-3" />
                  專業團隊指導
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    營養師個人化飲食規劃
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    運動教練專業指導
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    心理諮詢師情緒支持
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    24小時線上陪伴
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center">
                  <Users className="w-8 h-8 text-blue-500 mr-3" />
                  社群支持力量
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    同期學員互相鼓勵
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    班長制度貼心陪伴
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    定期分享會交流
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    畢業學員持續支持
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Card className="inline-block p-8 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">
                  記住這句話
                </h3>
                <p className="text-xl mb-2">
                  "我們要的是瘦一輩子，而不是瘦一陣子"
                </p>
                <p className="text-lg opacity-90">
                  任何時候開始都不嫌遲
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 行動呼籲 */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            準備開始你的健康之旅了嗎？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            我們不只是提供方法，更提供陪伴。每一個願意改變的人，都值得被好好對待。
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-rose-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              如何開始？
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">聯繫我們</h4>
                  <p className="text-gray-600 text-sm">透過LINE與我們聯繫，分享你的減重目標和困擾</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">專業諮詢</h4>
                  <p className="text-gray-600 text-sm">了解ABC瘦身法詳細內容，解答你的所有疑問</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">開始改變</h4>
                  <p className="text-gray-600 text-sm">加入我們的課程，開始你的健康轉變之旅</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <strong>想了解更多？</strong> 請透過LINE與我們聯繫
            </p>
            <p className="text-gray-600">
              我們會親自回覆每一個詢問，並提供個人化的諮詢建議
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-4 text-lg"
              onClick={() => window.open('https://lin.ee/ApHSqCU', '_blank')}
            >
              立即聯繫我們
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-700 italic">
              "如果你已經嘗試減肥很多次了，如果你已經對自己失去信心了，我想告訴你：
              你並不孤單，你也沒有做錯什麼。真正的改變，從決定開始的那一刻就已經開始了。"
            </p>
          </div>
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-rose-500 mr-2" />
            <span className="text-xl font-bold">ABC瘦身法</span>
          </div>
          <p className="text-gray-400 mb-4">
            科學、可持續、有溫度的減重方法
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 ABC瘦身法. 用心陪伴每一個想要改變的你
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

