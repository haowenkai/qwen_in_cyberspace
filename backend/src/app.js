const express = require('express');
const app = express();
const port = 8080; // 将端口修改为 8080
const userRouter = require('./routes/user');
const projectRouter = require('./routes/project');
const skillRouter = require('./routes/skill'); // 引入技能数据路由
const adminRouter = require('./routes/admin'); // 引入管理端路由

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <title>个人网站</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>欢迎来到我的个人网站</h1>
        </header>
        <main>
            <section id="about">
                <h2>关于我</h2>
                <p>欢迎来到我的个人网站！我是一名热衷于 Web 开发的工程师。<span id="email-display"></span></p>
                <button id="edit-email-button">编辑邮箱</button>
                <div id="edit-email-form" style="display:none;">
                    <label for="email">邮箱:</label>
                    <input type="email" id="email" name="email">
                    <button id="submit-email-button">保存</button>
                </div>
            </section>
            <section id="skills">
                <h2>技能</h2>
                <ul>
                    </ul>
            </section>
            <section id="projects">
                <h2>项目展示</h2>
                <p>这里展示我参与过的一些项目。</p>
                <ul>
                    <li>项目一</li>
                    <li>项目二</li>
                    <li>项目三</li>
                </ul>
            </section>
            <section id="contact">
                <h2>联系方式</h2>
                <p>你可以通过以下方式联系我：</p>
                <ul>
                    <li>邮箱：your-email@example.com</li>
                    <li>GitHub：<a href="https://github.com/your-username">your-username</a></li>
                    <li>Twitter：<a href="https://twitter.com/your-twitter">your-twitter</a></li>
                </ul>
            </section>
        </main>
        <footer>
            <p>© 2024 我的个人网站</p>
        </footer>
    </div>
    <script src="./js/script.js"></script>
</body>
    `);
});

app.use('/api/user', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/skills', skillRouter); // 使用技能数据路由
app.use('/admin', adminRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
