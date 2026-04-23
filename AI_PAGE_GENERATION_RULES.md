# AI 页面生成约束规范

本文档用于约束前端与 AI 工具生成页面时的实现方式，确保输出页面与设计系统保持一致。

## 适用范围

- 适用于所有使用 `@workspace/mobile-design-system` 的移动端页面。
- 适用于 AI 生成代码、人工补写代码、代码评审与 CI 检查。

## 强制规则（MUST）

1. 页面根节点必须使用 `MobilePage`。
2. 必须引入 `@workspace/mobile-design-system/tokens.css`。
3. 区块布局必须优先使用 `PageSection`，底部操作必须优先使用 `BottomActionBar`。
4. 状态展示必须使用 `Tag` / `Alert` / `StatCard` 的语义枚举，不得手写状态色。
5. 禁止在业务代码中硬编码视觉 token：颜色、圆角、阴影、字号、间距。
6. 禁止对组件库视觉样式进行强覆盖（如 `!important`、深层选择器覆盖库内类名）。
7. 组件库版本必须锁定到 tag（例如 `#v0.1.0`），禁止跟随 `main/master` 漂移。

## 禁止项（DO NOT）

- 不要手写 `#1677ff`、`border-radius: 12px`、`box-shadow: ...` 等视觉样式值。
- 不要跳过组件库直接使用 `div + 自定义 CSS` 复刻按钮、标签、卡片、告警。
- 不要把语义状态映射错位（例如“待处理”使用 success 绿色）。
- 不要在页面级全局样式中覆盖组件库类名（如 `.ds-btn`, `.ds-card`）。

## AI 代码生成提示词模板（推荐）

将以下文本作为 AI 编码工具的系统提示词或前置提示词：

```text
你正在实现移动端业务页面，必须遵守以下设计系统约束：
1) 仅可从 @workspace/mobile-design-system 导入组件
2) 必须引入 @workspace/mobile-design-system/tokens.css
3) 页面根容器必须使用 MobilePage
4) 分区结构优先使用 PageSection，底部操作优先使用 BottomActionBar
5) 状态展示必须使用 Tag/Alert/StatCard 的语义 variant
6) 禁止手写颜色、圆角、阴影、字号、间距
7) 禁止使用 !important 和覆盖组件库视觉样式
8) 如果组件库缺失某个组件，先输出“缺失组件清单”，不要自行发明视觉风格

输出要求：
- 先给出组件导入与页面结构
- 再给出完整 TSX
- 最后给出自检结果（是否违反上述 8 条）
```

## 标准页面骨架示例

```tsx
import {
  MobilePage,
  SearchBar,
  PageSection,
  StatCard,
  BottomActionBar,
} from "@workspace/mobile-design-system";
import "@workspace/mobile-design-system/tokens.css";

export function ExamplePage() {
  return (
    <MobilePage>
      <SearchBar />

      <PageSection title="今日概览">
        <StatCard label="待入库" value="128" trend="+12%" status="warning" />
        <StatCard label="已完成" value="3,560" trend="+8%" status="success" />
      </PageSection>

      <BottomActionBar
        secondaryAction={{ children: "暂存", variant: "secondary" }}
        primaryAction={{ children: "提交", variant: "primary" }}
      />
    </MobilePage>
  );
}
```

## PR 审查清单（Reviewer Checklist）

- [ ] 页面是否使用 `MobilePage` 作为根容器
- [ ] 是否引入 `tokens.css`
- [ ] 是否优先使用组件库组件，而非手写视觉样式
- [ ] 是否存在硬编码颜色/圆角/阴影/字号/间距
- [ ] 状态语义是否正确使用 `variant`
- [ ] 是否存在 `!important` 或全局覆盖组件库视觉样式
- [ ] 依赖版本是否锁定到 tag

## 违规处理建议

1. 阻断合并：出现任一 MUST 违规项，PR 不允许合并。
2. 统一整改：由提交人改为组件库标准写法。
3. 组件补齐：若因“库中缺组件”导致绕过，优先补库再开发业务。
