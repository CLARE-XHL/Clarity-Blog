<script setup lang="ts">
useSeoMeta({
	title: '隐私政策',
	description: 'CrCLARE 工作室隐私政策声明',
})
</script>

<template>
<div class="mobile-only">
	<BlogHeader to="/" suffix="隐私政策" tag="h1" />
</div>

<div class="article privacy-container">
	<h1 class="privacy-title">📝 CrCLARE 工作室 - 隐私政策声明</h1>
	<p>欢迎访问 CrCLARE 工作室站点。我们致力于保护您的隐私，并尽可能保持数据处理透明。以下是我们的具体声明：</p>

	<h2>1. 开源与可审计性</h2>
	<p>除 Pass 服务外，本工作室所有站点均在 GitHub 仓库公开，代码随时可供社区审计。我们不隐藏任何数据处理逻辑，您可以自行审查源码以验证本声明的真实性。</p>

	<h2>2. 数据收集与使用</h2>
	<p>本工作室站点（Pass 除外）均为纯静态站点。我们不会主动记录或收集任何您的个人身份信息。</p>
	<p>唯一的例外是：当您使用 Wookit 评论系统时，您主动输入的邮箱、昵称、网站地址，以及系统自动获取的 IP 地址，会被存储于 MongoDB 数据库中。这些数据仅用于展示您的评论及防止垃圾留言，具体数据安全请参考 <a href="https://www.mongodb.com/legal/privacy/privacy-policy" target="_blank" rel="noopener">MongoDB 隐私政策</a>。</p>
	<p><strong>特别声明：对于使用 Chronos Seal 项目的用户，您的加密主种子（Seed）仅在本地生成，绝不会上传至我们的任何服务器，我们无权也无法获取您的加密密钥。</strong></p>

	<h2>3. 基础设施与托管服务</h2>
	<p>除 Pass 服务外，本工作室旗下的站点与后端服务，按业务类型分布依托于以下基础设施平台，均符合业界安全标准：</p>
	<ul>
		<li><strong>GitHub</strong>：所有站点的代码托管与版本控制。</li>
		<li><strong>GitHub Pages</strong>：承载工作室主页与文档站点的静态托管。</li>
		<li><strong>Vercel</strong>：承载博客、评论系统以及 Chronos Seal 盲代理服务。评论系统与代理服务均在 Serverless 无服务器函数中运行。</li>
		<li><strong>Cloudflare Pages</strong>：承载图床与网盘。</li>
		<li><strong>Cloudflare</strong>：统一负责所有站点的 DNS 解析、CDN 加速与 WAF 安全防护。</li>
	</ul>
	<p>上述平台会在服务器层面自动处理访问流量日志（如 IP 地址、访问时间、请求路径等）。这些日志仅用于安全防护与访问统计，各平台的具体数据处理受其各自隐私政策约束。</p>

	<h2>4. Cookie 与第三方分析</h2>
	<p>我们部分站点使用 Google Analytics 进行匿名流量分析。该服务受 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google 隐私政策</a>保护。若未来我们面向特定合规地区（如欧盟）启用严格的 Cookie 同意管理，我们将在此更新相关说明。</p>

	<h2>5. Pass 服务</h2>
	<p>如果您使用 CrCLARE 旗下的 Pass 服务，由于涉及账号认证，具体的数据处理与隐私保护条款，请以 <a href="https://logto.io/terms/privacy-policy" target="_blank" rel="noopener">Logto 隐私政策</a>为准。</p>

	<h2>6. 数据共享与披露</h2>
	<p>我们承诺不会与任何第三方个人、公司或组织分享、出售或披露您的个人信息。为了提供上述服务，我们接入了以下第三方基础设施与工具，其数据处理受各自隐私政策约束：</p>
	<ul>
		<li>MongoDB（评论系统数据库）：<a href="https://www.mongodb.com/legal/privacy/privacy-policy" target="_blank" rel="noopener">https://www.mongodb.com/legal/privacy/privacy-policy</a></li>
		<li>Logto（Pass 服务认证）：<a href="https://logto.io/terms/privacy-policy" target="_blank" rel="noopener">https://logto.io/terms/privacy-policy</a></li>
		<li>Google Analytics（匿名流量分析）：<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a></li>
		<li>GitHub（代码托管，其 Pages 服务承载主页与文档站）：<a href="https://docs.github.com/zh/site-policy/privacy-policies" target="_blank" rel="noopener">https://docs.github.com/zh/site-policy/privacy-policies</a></li>
		<li>Vercel（博客、评论与盲代理托管）：<a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener">https://vercel.com/legal/privacy-notice</a></li>
		<li>Cloudflare Pages（图床与网盘托管）：<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">https://www.cloudflare.com/privacypolicy/</a></li>
		<li>Cloudflare（CDN 与安全防护）：<a href="https://www.cloudflare-cn.com/privacypolicy/" target="_blank" rel="noopener">https://www.cloudflare-cn.com/privacypolicy/</a></li>
	</ul>
	<p>我们采用行业标准的安全措施保护数据，但没有任何系统是绝对安全的，我们会尽最大努力防范数据泄露。</p>

	<h2>7. 数据留存与您的权利</h2>
	<p>评论数据将被留存以供展示，直至您主动要求删除。您有权随时通过 support@crclare.top 向我们申请导出或彻底删除您的评论记录及关联的 IP 信息。</p>

	<h2>8. 联系我们</h2>
	<p>如有任何关于隐私政策的疑问、安全漏洞报告或数据审计需求，请联系：support@crclare.top。</p>

	<p><em>最后更新：2026年9月12日</em></p>
</div>
</template>

<style lang="scss" scoped>
.privacy-container {
	max-width: 48rem;
	margin: 0 auto;
	padding: 1.5rem 1.25rem; /* 移动端横向边距增加到 1.25rem */
	line-height: 1.7;

	@media (min-width: 768px) {
		padding: 2.5rem 2rem;
	}

	:deep(h1.privacy-title) {
		font-size: 1.5rem;
		line-height: 1.3;
		margin-bottom: 1rem;
		word-break: break-word;

		@media (min-width: 768px) {
			font-size: 2rem;
		}
	}

	:deep(h2) {
		font-size: 1.2rem;
		margin-top: 2rem;
		margin-bottom: 0.75rem;

		@media (min-width: 768px) {
			font-size: 1.4rem;
		}
	}

	:deep(p) {
		margin-bottom: 0.75rem;
	}

	:deep(ul) {
		padding-left: 1.25rem;
		margin: 0.5rem 0;
	}

	:deep(li) {
		margin-bottom: 0.4rem;
	}
	
	:deep(a) {
		word-break: break-all; /* 防止长链接撑破移动端排版 */
	}
}
</style>
