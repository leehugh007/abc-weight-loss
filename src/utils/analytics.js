// Google Analytics 工具函數

// ABC瘦身法的GA測量ID
export const GA_MEASUREMENT_ID = 'G-RLQV968FK4';

// 初始化 Google Analytics
export const initGA = () => {
  // 只在生產環境中啟用GA
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    // 載入 Google Analytics 腳本
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // 初始化 gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// 追蹤頁面瀏覽
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// 追蹤事件
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }
};

// 追蹤按鈕點擊
export const trackButtonClick = (buttonName, section = '') => {
  trackEvent('click', {
    category: 'button',
    label: `${section ? section + '_' : ''}${buttonName}`,
  });
};

// 追蹤表單提交
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', {
    category: 'form',
    label: formName,
  });
};

// 追蹤滾動深度
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll', {
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

// 追蹤外部連結點擊
export const trackOutboundLink = (url) => {
  trackEvent('click', {
    category: 'outbound_link',
    label: url,
  });
};

