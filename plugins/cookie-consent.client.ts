// plugins/cookie-consent.client.ts
import CookieConsent from 'cookie-consent-gdpr';

// 动态加载 Google Analytics 的函数（使用你提供的 ID）
function loadGoogleAnalytics() {
  if (document.querySelector('script[src*="gtag/js?id=G-CDSS4HY61X"]')) return;

  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CDSS4HY61X';
  script.async = true;
  document.head.appendChild(script);

  const inline = document.createElement('script');
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-CDSS4HY61X');
  `;
  document.head.appendChild(inline);
}

export default defineNuxtPlugin(() => {
  CookieConsent.init({
    privacyPolicyUrl: '/privacy-policy',
    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
        title: '绝对必要的 Cookie',
        description: '这些是网站运行所必需的核心 Cookie，无法关闭。'
      },
      analytics: {
        enabled: false,
        readOnly: false,
        title: '分析型 Cookie',
        description: '帮助我们了解访客如何与网站互动，以优化您的体验。'
      }
    },
    texts: {
      bannerTitle: '我们重视您的隐私',
      bannerDescription: '我们使用 Cookie 来提升您的浏览体验、分析网站流量。点击“接受所有”即表示您同意使用所有 Cookie。',
      acceptAll: '接受所有',
      rejectAll: '拒绝非必要',
      settings: 'Cookie 设置',
      necessaryTitle: '绝对必要',
      necessaryDescription: '这些 Cookie 是网站运行所必需的，无法关闭。',
      analyticsTitle: '分析型',
      analyticsDescription: '帮助我们了解访客如何与网站互动。'
    }
  });

  CookieConsent.on('category:accepted', (category: string) => {
    if (category === 'analytics') {
      loadGoogleAnalytics();
    }
  });

  if (CookieConsent.hasCategory('analytics')) {
    loadGoogleAnalytics();
  }
});
