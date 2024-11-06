

<relativePath></relativePath>


你可以使用以下命令来运行父项目下的子项目：

```bash
mvn spring-boot:run -pl 子项目名
```

确保你在父项目的根目录下执行此命令，并将“子项目名”替换为实际的子项目路径或名称。这样可以更好地管理多模块项目。你还有其他具体问题吗？



`PS1="\[\e[37;40m\][\[\e[32;40m\]\u\[\e[37;40m\]@\h \[\e[36;40m\]\w\[\e[0m\]]\\$ "` shell 高亮


```
PS C:\Users\admin\Projects\vue> rm C:\Users\admin\AppData\Local\npm-cache

确认
C:\Users\admin\AppData\Local\npm-cache 处的项具有子项，并且未指定 Recurse 参数。如果继续，所有子项均将随该项删除。是否确实要继续?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“Y”): A
PS C:\Users\admin\Projects\vue> npm create vue@latest --registry=https://registry.npmmirror.com
Need to install the following packages:
create-vue@3.11.1
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

√ 请输入项目名称： ... vue-project
√ 是否使用 TypeScript 语法？ ... 否 / 是
√ 是否启用 JSX 支持？ ... 否 / 是
√ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
√ 是否引入 Pinia 用于状态管理？ ... 否 / 是
√ 是否引入 Vitest 用于单元测试？ ... 否 / 是
√ 是否要引入一款端到端（End to End）测试工具？ » 不需要
√ 是否引入 ESLint 用于代码质量检测？ ... 否 / 是
√ 是否引入 Vue DevTools 7 扩展用于调试? (试验阶段) ... 否 / 是

正在初始化项目 C:\Users\admin\Projects\vue\vue-project...

项目初始化完成，可执行以下命令：

  cd vue-project
  npm install
  npm run dev

npm notice
npm notice New minor version of npm available! 10.1.0 -> 10.9.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.9.0
npm notice Run npm install -g npm@10.9.0 to update!
npm notice
PS C:\Users\admin\Projects\vue> cd .\vue-project\
PS C:\Users\admin\Projects\vue\vue-project> npm install --registry=https://registry.npmmirror.com

added 179 packages in 13s

39 packages are looking for funding
  run `npm fund` for details
PS C:\Users\admin\Projects\vue\vue-project> npm run dev

> vue-project@0.0.0 dev
> vite


  VITE v5.4.9  ready in 1165 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  Vue DevTools: Open http://localhost:5173/__devtools__/ as a separate window
  ➜  Vue DevTools: Press Alt(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools

  ➜  press h + enter to show help
^C^C终止批处理操作吗(Y/N)? Y
PS C:\Users\admin\Projects\vue\vue-project> npm create vue@latest --registry=https://registry.npmmirror.com
````
