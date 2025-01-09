<template>
  <div>
    <a href="/admin.html">管理面板</a>
    <main>
      <article id="about">
        <h2>关于我</h2>
        <p>欢迎来到我的个人网站！我是一名热衷于 Web 开发的工程师。<span id="email-display"></span></p>
        <button id="edit-email-button">编辑邮箱</button>
        <div id="edit-email-form" style="display:none;">
          <label for="email">邮箱:</label>
          <input type="email" id="email" name="email">
          <button id="submit-email-button">保存</button>
        </div>
      </article>
      <article id="skills">
        <h2>技能</h2>
        <ul>
        </ul>
      </article>
      <article id="projects">
        <h2>项目展示</h2>
        <p>这里展示我参与过的一些项目。</p>
        <ul>
          <li>项目一</li>
          <li>项目二</li>
          <li>项目三</li>
        </ul>
      </article>
      <article id="contact">
        <h2>联系方式</h2>
        <p>你可以通过以下方式联系我：</p>
        <ul>
          <li>邮箱：your-email@example.com</li>
          <li>GitHub：<a href="https://github.com/your-username">your-username</a></li>
          <li>Twitter：<a href="https://twitter.com/your-twitter">your-twitter</a></li>
        </ul>
      </article>
    </main>
    <footer>
      <p>© 2024 我的个人网站</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/*  scoped 样式将仅应用于此组件的元素 */
</style>
