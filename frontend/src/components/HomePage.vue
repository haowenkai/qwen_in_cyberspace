<template>
  <div class="container">
    <aside class="sidebar">
      <h2>管理面板</h2>
      <ul>
        <li><a href="#about">关于我</a></li>
        <li><a href="#skills">技能</a></li>
        <li><a href="#projects">项目展示</a></li>
      </ul>
    </aside>
  </div>
  <div class="bottom-container">
    <main class="content">
      <section id="about" class="about">
        <h2>关于我</h2>
        <p>欢迎来到我的个人网站！我是一名热衷于 Web 开发的工程师。</p>
        <button class="edit-email-button">编辑邮箱</button>
      </section>
      <section id="skills" class="skills">
        <h2>技能</h2>
        <ul>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </section>
      <section id="projects" class="projects">
        <h2>项目展示</h2>
        <p>这里展示我参与过的一些项目。</p>
        <ul>
          <li>项目一</li>
          <li>项目二</li>
          <li>项目三</li>
        </ul>
      </section>
    </main>
    <footer id="contact" class="contact">
      <h2>联系方式</h2>
      <section class="contact-info">
        <p>你可以通过以下方式联系我：</p>
        <div class="contact-links">
          <p>邮箱：your-email@example.com</p>
          <p>GitHub：your-username</p>
          <p>Twitter：your-twitter</p>
        </div>
      </section>
      <p class="copyright">© 2024 我的个人网站</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 可以将 HomePage.jsx 中的 CSS 样式移动到这里 */
.contact {
}

.container {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  margin: 20px;
}

.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #f0f0f0;
}

.sidebar h2 {
  margin-top: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  text-decoration: none;
  color: #333;
}

.content {
  flex: 1;
  padding: 20px;
  text-align: center;
}

.content section {
  margin-bottom: 20px;
}

.content h2 {
  margin-top: 0;
}

.skills ul,
.projects ul {
  list-style: disc;
  margin-left: 20px;
}

.contact-info {
  margin-top: 10px;
}

.contact-links p {
  margin: 5px 0;
}

.copyright {
  text-align: center;
  margin-top: 20px;
  font-size: 0.8em;
  color: #777;
}

.bottom-container {
  display: flex;
  flex-direction: column;
}
</style>
