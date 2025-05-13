import React from 'react'
import { 
  TrendingUp, 
  Target, 
  BarChart2, 
  DollarSign, 
  Users, 
  Zap, 
  Search, 
  MessageCircle, 
  PieChart, 
  Clock, 
  Eye, 
  Award 
} from 'lucide-react'

function MediaBuying() {
  return (
    <div className="cols-span-1 md:col-span-3 w-full flex flex-col items-start justify-start mt-4">
      {/* Header Section */}
      <div className="w-full mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Media Buying Strategies</h1>
        <p className="text-gray-600 text-sm text-justify mb-3">
          At Visuals Production, we don't just create content—we ensure it reaches your target audience effectively.
          Our comprehensive media buying services help you maximize ROI across all digital platforms, from social media
          to search engines, with data-driven strategies tailored to your business goals.
        </p>
      </div>
      
      {/* Featured Campaign Success */}
      <div className="w-full bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Award size={24} className="text-red-500" />
          <h2 className="text-xl font-semibold text-gray-800">Featured Campaign Success</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            <span className="text-3xl font-bold text-red-500 mb-1">350%</span>
            <span className="text-gray-600 text-sm text-center">ROI Increase</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            <span className="text-3xl font-bold text-red-500 mb-1">45%</span>
            <span className="text-gray-600 text-sm text-center">Lower Cost Per Acquisition</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            <span className="text-3xl font-bold text-red-500 mb-1">5.2M</span>
            <span className="text-gray-600 text-sm text-center">Impressions Generated</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm italic">
          "Visuals Production transformed our digital presence with strategic media buying that precisely targeted our audience and maximized our budget." — Client Name, Company
        </p>
      </div>
      
      {/* Platform Sections */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Media Buying Platforms</h2>
        
        {/* Facebook & Instagram Ads */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-5">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Facebook & Instagram Ads</h3>
            <p className="text-gray-600 text-sm text-justify mb-3">
              Leverage the power of precise audience targeting on the world's largest social platforms. Our Facebook and Instagram ad strategies drive engagement, brand awareness, and conversions through compelling visual content and strategic placement.
            </p>
            
            <h4 className="text-md font-medium text-gray-700 mb-2">Key Strategies:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Target size={18} className="text-blue-600" />
                <span>Custom Audience Creation & Lookalike Modeling</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Zap size={18} className="text-blue-600" />
                <span>Dynamic Product & Carousel Ads</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Users size={18} className="text-blue-600" />
                <span>Retargeting & Remarketing Campaigns</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <BarChart2 size={18} className="text-blue-600" />
                <span>A/B Testing & Performance Optimization</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm text-gray-700">
                <strong>Platform Benefits:</strong> Detailed demographic targeting, visual-focused formats, immersive mobile experiences, integrated shopping features
              </p>
            </div>
          </div>
        </div>
        
        {/* Google Ads */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-5">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Google Ads</h3>
            <p className="text-gray-600 text-sm text-justify mb-3">
              Capture high-intent audiences at every stage of the customer journey. Our Google Ads strategies span search, display, video, and shopping to ensure your brand appears exactly when potential customers are looking for your products or services.
            </p>
            
            <h4 className="text-md font-medium text-gray-700 mb-2">Key Strategies:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Search size={18} className="text-green-600" />
                <span>Search Engine Marketing & Keyword Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Eye size={18} className="text-green-600" />
                <span>Display Network & Programmatic Buying</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <DollarSign size={18} className="text-green-600" />
                <span>Smart Bidding & Conversion Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <PieChart size={18} className="text-green-600" />
                <span>Performance Max & Cross-Channel Campaigns</span>
              </div>
            </div>
            
            <div className="bg-green-50 p-3 rounded-md">
              <p className="text-sm text-gray-700">
                <strong>Platform Benefits:</strong> Intent-based targeting, extensive reach, comprehensive analytics, flexible campaign types
              </p>
            </div>
          </div>
        </div>
        
        {/* TikTok Ads */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-5">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-800 mb-3">TikTok Ads</h3>
            <p className="text-gray-600 text-sm text-justify mb-3">
              Connect with younger audiences through creative, authentic content that drives engagement. Our TikTok advertising strategies leverage the platform's unique format and algorithm to maximize brand visibility and audience connection.
            </p>
            
            <h4 className="text-md font-medium text-gray-700 mb-2">Key Strategies:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <TrendingUp size={18} className="text-pink-600" />
                <span>Trend Leveraging & Viral Content Creation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Users size={18} className="text-pink-600" />
                <span>Creator Partnerships & Influencer Amplification</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Zap size={18} className="text-pink-600" />
                <span>In-Feed Video & Spark Ads</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MessageCircle size={18} className="text-pink-600" />
                <span>Hashtag Challenges & User-Generated Content</span>
              </div>
            </div>
            
            <div className="bg-pink-50 p-3 rounded-md">
              <p className="text-sm text-gray-700">
                <strong>Platform Benefits:</strong> High engagement rates, viral potential, younger audience reach, authentic content formats
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Creation Section */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Promotional Content Creation</h2>
        <p className="text-gray-600 text-sm text-justify mb-4">
          Our integrated approach ensures your media buying strategy is powered by compelling, platform-optimized content that resonates with your target audience and drives action.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">Platform-Optimized Creative</h4>
            <p className="text-gray-600 text-sm">We create content specifically designed for each platform's unique specifications, audience behaviors, and best practices.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">A/B Testing Framework</h4>
            <p className="text-gray-600 text-sm">Multiple creative variants are developed and systematically tested to identify the highest-performing content for your audience.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">Rapid Iteration Cycle</h4>
            <p className="text-gray-600 text-sm">We continuously analyze performance data to refine creative assets, ensuring ongoing optimization of campaign results.</p>
          </div>
        </div>
      </div>
      
      {/* Media Buying Process */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Media Buying Process</h2>
        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-16 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center z-10">
                  <span className="text-white text-sm font-medium">1</span>
                </div>
              </div>
              <div className="flex-1 ml-0 md:ml-4 mt-2 md:mt-0">
                <h3 className="font-medium text-gray-800">Discovery & Analysis</h3>
                <p className="text-gray-600 text-sm mt-1">We analyze your business goals, audience data, and market positioning to develop a tailored media strategy.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-16 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center z-10">
                  <span className="text-white text-sm font-medium">2</span>
                </div>
              </div>
              <div className="flex-1 ml-0 md:ml-4 mt-2 md:mt-0">
                <h3 className="font-medium text-gray-800">Strategic Planning</h3>
                <p className="text-gray-600 text-sm mt-1">We develop comprehensive channel strategies, budget allocation plans, and campaign structures.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-16 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center z-10">
                  <span className="text-white text-sm font-medium">3</span>
                </div>
              </div>
              <div className="flex-1 ml-0 md:ml-4 mt-2 md:mt-0">
                <h3 className="font-medium text-gray-800">Creative Development</h3>
                <p className="text-gray-600 text-sm mt-1">Our team creates platform-specific ad content designed to engage your target audience.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-16 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center z-10">
                  <span className="text-white text-sm font-medium">4</span>
                </div>
              </div>
              <div className="flex-1 ml-0 md:ml-4 mt-2 md:mt-0">
                <h3 className="font-medium text-gray-800">Campaign Setup & Launch</h3>
                <p className="text-gray-600 text-sm mt-1">We implement precise targeting, tracking configurations, and optimization settings before launching your campaigns.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-16 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center z-10">
                  <span className="text-white text-sm font-medium">5</span>
                </div>
              </div>
              <div className="flex-1 ml-0 md:ml-4 mt-2 md:mt-0">
                <h3 className="font-medium text-gray-800">Optimization & Scaling</h3>
                <p className="text-gray-600 text-sm mt-1">Our team continuously monitors performance, optimizes campaigns, and scales successful strategies.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-16 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center z-10">
                  <span className="text-white text-sm font-medium">6</span>
                </div>
              </div>
              <div className="flex-1 ml-0 md:ml-4 mt-2 md:mt-0">
                <h3 className="font-medium text-gray-800">Reporting & Analysis</h3>
                <p className="text-gray-600 text-sm mt-1">We provide transparent, comprehensive reporting with actionable insights for continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data-Driven Approach */}
      <div className="w-full bg-gray-50 p-5 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Data-Driven Approach</h2>
        <p className="text-gray-600 text-sm mb-4">
          We believe in making decisions based on data, not assumptions. Our media buying strategies are continuously refined through:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <PieChart size={20} className="text-red-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Advanced Analytics</h4>
              <p className="text-gray-600 text-sm">Multi-touch attribution modeling and cross-platform performance analysis</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <BarChart2 size={20} className="text-red-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Competitive Intelligence</h4>
              <p className="text-gray-600 text-sm">Market analysis and competitor ad strategy monitoring</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Users size={20} className="text-red-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Audience Insights</h4>
              <p className="text-gray-600 text-sm">Behavioral analysis and segmentation optimization</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Clock size={20} className="text-red-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Real-Time Optimization</h4>
              <p className="text-gray-600 text-sm">Continuous monitoring and immediate strategy adjustments</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration with Video/Audio Production */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Seamless Integration with Production Services</h2>
        <p className="text-gray-600 text-sm text-justify mb-4">
          Our media buying strategies work hand-in-hand with our video, audio, and podcast production services, creating a cohesive marketing ecosystem that maximizes your investment.
        </p>
        
        <div className="bg-red-50 p-5 rounded-lg">
          <h3 className="font-medium text-gray-800 mb-3">The Visuals Production Advantage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-500">✓</div>
              <p className="text-gray-600 text-sm">Integrated production and distribution strategy</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-500">✓</div>
              <p className="text-gray-600 text-sm">Platform-optimized content creation</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-500">✓</div>
              <p className="text-gray-600 text-sm">Consistent messaging across all touchpoints</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-500">✓</div>
              <p className="text-gray-600 text-sm">Streamlined workflow and faster turnaround</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-500">✓</div>
              <p className="text-gray-600 text-sm">Single point of contact for all services</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-red-500">✓</div>
              <p className="text-gray-600 text-sm">Cost-effective bundled services</p>
            </div>
          </div>
          
          <div className="mt-4">
            <a href="/video-audio-podcast" className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
              Learn About Our Production Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="w-full bg-red-50 p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Ready to Launch Your Media Campaign?</h2>
        <p className="text-gray-600 text-sm mb-4">Contact our media buying experts today to discuss your marketing goals and receive a customized strategy proposal.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/contact" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 inline-block text-sm font-medium text-center">
            Request a Strategy Call
          </a>
          {/* <a href="/case-studies" className="bg-white border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 inline-block text-sm font-medium text-center">
            View Case Studies
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default React.memo(MediaBuying)