const zhHans = {
  common: {
    login: '登录',
    logout: '退出登录',
    email: '邮箱',
    password: '密码',
    welcome: '欢迎回到 LangBot 👋',
    continueToLogin: '登录以继续',
    loginSuccess: '登录成功',
    loginFailed: '登录失败，请检查邮箱和密码是否正确',
    enterEmail: '输入邮箱地址',
    enterPassword: '输入密码',
    invalidEmail: '请输入有效的邮箱地址',
    emptyPassword: '请输入密码',
    language: '语言',
    helpDocs: '帮助文档',
    create: '创建',
    edit: '编辑',
    delete: '删除',
    add: '添加',
    select: '请选择',
    cancel: '取消',
    submit: '提交',
    error: '错误',
    success: '成功',
    save: '保存',
    saving: '保存中...',
    confirm: '确认',
    confirmDelete: '确认删除',
    deleteConfirmation: '你确定要删除这个吗？',
    selectOption: '选择一个选项',
    required: '必填',
    enable: '是否启用',
    name: '名称',
    description: '描述',
    close: '关闭',
    deleteSuccess: '删除成功',
    deleteError: '删除失败：',
    addRound: '添加回合',
    copySuccess: '复制成功',
    test: '测试',
    forgotPassword: '忘记密码？',
    loading: '加载中...',
  },
  notFound: {
    title: '页面不存在',
    description:
      '您要查找的页面似乎不存在。请检查您输入的 URL 是否正确，或者返回首页。',
    back: '上一级',
    home: '返回主页',
    help: '查看帮助文档',
  },
  models: {
    title: '模型配置',
    description: '配置和管理可在流水线中使用的模型',
    createModel: '创建模型',
    editModel: '编辑模型',
    getModelListError: '获取模型列表失败：',
    modelName: '模型名称',
    modelProvider: '模型提供商',
    modelBaseURL: '基础 URL',
    modelAbilities: '模型能力',
    saveSuccess: '保存成功',
    saveError: '保存失败：',
    createSuccess: '创建成功',
    createError: '创建失败：',
    deleteSuccess: '删除成功',
    deleteError: '删除失败：',
    deleteConfirmation: '你确定要删除这个模型吗？',
    modelNameRequired: '模型名称不能为空',
    modelProviderRequired: '模型供应商不能为空',
    requestURLRequired: '请求URL不能为空',
    apiKeyRequired: 'API Key不能为空',
    keyNameRequired: '键名不能为空',
    mustBeValidNumber: '必须是有效的数字',
    mustBeTrueOrFalse: '必须是 true 或 false',
    requestURL: '请求URL',
    apiKey: 'API Key',
    abilities: '能力',
    selectModelAbilities: '选择模型能力',
    visionAbility: '视觉能力',
    functionCallAbility: '函数调用',
    extraParameters: '额外参数',
    addParameter: '添加参数',
    keyName: '键名',
    type: '类型',
    value: '值',
    string: '字符串',
    number: '数字',
    boolean: '布尔值',
    selectModelProvider: '选择模型供应商',
    modelProviderDescription: '请填写供应商向您提供的模型名称',
    selectModel: '请选择模型',
    testSuccess: '测试成功',
    testError: '测试失败，请检查模型配置',
    llmModels: '对话模型',
  },
  bots: {
    title: '机器人',
    description: '创建和管理机器人，这是 LangBot 与各个平台连接的入口',
    createBot: '创建机器人',
    editBot: '编辑机器人',
    getBotListError: '获取机器人列表失败：',
    botName: '机器人名称',
    botDescription: '机器人描述',
    botNameRequired: '机器人名称不能为空',
    botDescriptionRequired: '机器人描述不能为空',
    adapterRequired: '适配器不能为空',
    defaultDescription: '一个机器人',
    getBotConfigError: '获取机器人配置失败：',
    saveSuccess: '保存成功',
    saveError: '保存失败：',
    createSuccess: '创建成功 请启用或修改绑定流水线',
    createError: '创建失败：',
    deleteSuccess: '删除成功',
    deleteError: '删除失败：',
    deleteConfirmation: '你确定要删除这个机器人吗？',
    platformAdapter: '平台/适配器选择',
    selectAdapter: '选择适配器',
    adapterConfig: '适配器配置',
    bindPipeline: '绑定流水线',
    selectPipeline: '选择流水线',
    botLogTitle: '机器人日志',
    enableAutoRefresh: '开启自动刷新',
    session: '会话',
    yesterday: '昨天',
    earlier: '更久之前',
    dateFormat: '{{month}}月{{day}}日',
    setBotEnableError: '设置机器人启用状态失败',
    log: '日志',
    configuration: '配置',
    logs: '日志',
  },
  plugins: {
    title: '插件管理',
    description: '安装和配置用于扩展 LangBot 功能的插件',
    createPlugin: '创建插件',
    editPlugin: '编辑插件',
    installed: '已安装',
    marketplace: '插件市场',
    arrange: '编排',
    install: '安装',
    installFromGithub: '从 GitHub 安装插件',
    onlySupportGithub: '目前仅支持从 GitHub 安装',
    enterGithubLink: '请输入插件的Github链接',
    installing: '正在安装插件...',
    installSuccess: '插件安装成功',
    installFailed: '插件安装失败：',
    searchPlugin: '搜索插件',
    sortBy: '排序方式',
    mostStars: '最多星标',
    recentlyAdded: '最近新增',
    recentlyUpdated: '最近更新',
    noMatchingPlugins: '没有找到匹配的插件',
    loading: '加载中...',
    getPluginListError: '获取插件列表失败:',
    pluginConfig: '插件配置',
    noPluginInstalled: '暂未安装任何插件',
    pluginSort: '插件排序',
    pluginSortDescription:
      '插件顺序会影响同一事件内的处理顺序，请拖动插件卡片排序',
    pluginSortSuccess: '插件排序成功',
    pluginSortError: '插件排序失败：',
    pluginNoConfig: '插件没有配置项。',
    deleting: '删除中...',
    deletePlugin: '删除插件',
    cancel: '取消',
    saveConfig: '保存配置',
    saving: '保存中...',
    confirmDeletePlugin: '你确定要删除插件（{{author}}/{{name}}）吗？',
    confirmDelete: '确认删除',
    deleteError: '删除失败：',
    close: '关闭',
    deleteConfirm: '删除确认',
    modifyFailed: '修改失败：',
    eventCount: '事件：{{count}}',
    toolCount: '工具：{{count}}',
    starCount: '星标：{{count}}',
  },
  pipelines: {
    title: '流水线',
    description: '流水线定义了对消息事件的处理流程，用于绑定到机器人',
    createPipeline: '创建流水线',
    editPipeline: '编辑流水线',
    chat: '对话',
    configuration: '配置',
    debugChat: '对话调试',
    getPipelineListError: '获取流水线列表失败：',
    daysAgo: '天前',
    today: '今天',
    updateTime: '更新于',
    defaultBadge: '默认',
    sortBy: '排序方式',
    newestCreated: '最新创建',
    recentlyEdited: '最近编辑',
    earliestEdited: '最早编辑',
    basicInfo: '基础信息',
    aiCapabilities: 'AI 能力',
    triggerConditions: '触发条件',
    safetyControls: '安全控制',
    outputProcessing: '输出处理',
    nameRequired: '名称不能为空',
    descriptionRequired: '描述不能为空',
    createSuccess: '创建成功 请编辑流水线详细参数',
    createError: '创建失败：',
    saveSuccess: '保存成功',
    saveError: '保存失败：',
    deleteConfirmation:
      '你确定要删除这个流水线吗？已绑定此流水线的机器人将无法使用。',
    defaultPipelineCannotDelete: '默认流水线不可删除',
    deleteSuccess: '删除成功',
    deleteError: '删除失败：',
    debugDialog: {
      title: '流水线对话',
      selectPipeline: '选择流水线',
      sessionType: '会话类型',
      privateChat: '私聊',
      groupChat: '群聊',
      send: '发送',
      reset: '重置对话',
      inputPlaceholder: '发送 {{type}} 消息...',
      noMessages: '暂无消息',
      userMessage: '用户',
      botMessage: '机器人',
      sendFailed: '发送失败',
      resetSuccess: '对话已重置',
      resetFailed: '重置失败',
      loadMessagesFailed: '加载消息失败',
      loadPipelinesFailed: '加载流水线失败',
      atTips: '提及机器人',
    },
  },
  knowledge: {
    title: '知识库',
    createKnowledgeBase: '创建知识库',
    editKnowledgeBase: '编辑知识库',
    selectKnowledgeBase: '选择知识库',
    empty: '无',
    editDocument: '文档',
    description: '配置可用于提升模型回复质量的知识库',
    metadata: '元数据',
    documents: '文档',
    kbNameRequired: '知识库名称不能为空',
    kbDescriptionRequired: '知识库描述不能为空',
    embeddingModelUUIDRequired: '嵌入模型不能为空',
    daysAgo: '天前',
    today: '今天',
    kbName: '知识库名称',
    kbDescription: '知识库描述',
    defaultDescription: '一个知识库',
    embeddingModelUUID: '嵌入模型',
    selectEmbeddingModel: '选择嵌入模型',
    embeddingModelDescription: '用于向量化文本，可在模型配置页面配置',
    updateTime: '更新于',
    cannotChangeEmbeddingModel: '知识库创建后不可修改嵌入模型',
    updateKnowledgeBaseSuccess: '知识库更新成功',
    updateKnowledgeBaseFailed: '知识库更新失败',
    documentsTab: {
      name: '名称',
      status: '状态',
      noResults: '暂无文档',
      dragAndDrop: '拖拽文件到此处或点击上传',
      uploading: '上传中...',
      supportedFormats: '支持 PDF、Word、TXT、Markdown 等文档格式',
      uploadSuccess: '文件上传成功！',
      uploadError: '文件上传失败，请重试',
      uploadingFile: '上传文件中...',
      actions: '操作',
      delete: '删除文件',
      fileDeleteSuccess: '文件删除成功',
      fileDeleteFailed: '文件删除失败',
      processing: '处理中',
      completed: '完成',
      failed: '失败',
    },
    deleteKnowledgeBaseConfirmation:
      '你确定要删除这个知识库吗？此知识库下的所有文档将被删除。',
    retrieve: '检索测试',
    retrieveTest: '检索测试',
    query: '查询',
    queryPlaceholder: '输入查询内容...',
    distance: '距离',
    content: '内容',
    fileName: '文件名',
    noResults: '暂无结果',
    retrieveError: '检索失败',
  },
  register: {
    title: '初始化 LangBot 👋',
    description: '这是您首次启动 LangBot',
    adminAccountNote: '您填写的邮箱和密码将作为初始管理员账号',
    register: '注册',
    initSuccess: '初始化成功 请登录',
    initFailed: '初始化失败：',
  },
  resetPassword: {
    title: '重置密码 🔐',
    description: '输入恢复密钥和新的密码来重置您的账户密码',
    recoveryKey: '恢复密钥',
    recoveryKeyDescription:
      '存储在配置文件`data/config.yaml`的`system.recovery_key`中',
    newPassword: '新密码',
    enterRecoveryKey: '输入恢复密钥',
    enterNewPassword: '输入新密码',
    recoveryKeyRequired: '恢复密钥不能为空',
    newPasswordRequired: '新密码不能为空',
    resetPassword: '重置密码',
    resetting: '重置中...',
    resetSuccess: '密码重置成功，请登录',
    resetFailed: '密码重置失败，请检查邮箱和恢复密钥是否正确',
    backToLogin: '返回登录',
  },
  embedding: {
    description: '管理嵌入模型，用于向量化文本',
    createModel: '创建嵌入模型',
    editModel: '编辑嵌入模型',
    getModelListError: '获取嵌入模型列表失败：',
    embeddingModels: '嵌入模型',
    extraParametersDescription:
      '将在请求时附加到请求体中，如 encoding_format, dimensions 等',
  },
  llm: {
    llmModels: '对话模型',
    description: '管理 LLM 模型，用于对话消息生成',
    extraParametersDescription:
      '将在请求时附加到请求体中，如 max_tokens, temperature, top_p 等',
  },
};

export default zhHans;
