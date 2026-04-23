# Mobile Design System Component Library

这是一套基于你当前设计系统落地的前端组件库实现，目标是让仓储管理与销售管理页面默认就符合规范，而不是依赖开发者手工“对齐样式”。

## 已实现

- Design Tokens: `src/tokens.css`
- Components:
  - `Button`（primary / secondary / ghost / danger）
  - `Input`（含错误态）
  - `Tag`（primary / success / warning / danger / info）
  - `Card`
  - `Alert`（info / success / warning / danger）
  - `MobilePage`（移动端 375 画布约束）
  - `PageSection`（统一区块标题、间距节奏）
  - `StatCard`（统一 KPI 卡片样式与状态标签映射）
  - `SearchBar`（标准搜索输入）
  - `BottomActionBar`（标准底部双按钮操作条）

## 规范增强（本次优化）

- 强制基础字体与盒模型：组件库默认注入统一字体栈和 `box-sizing`
- 颜色语义化：状态背景色全部走 Token，避免业务端硬编码颜色
- 阴影与圆角统一：卡片与按钮阴影走 Token，圆角统一变量驱动
- 页面结构推荐：通过 `MobilePage + PageSection + BottomActionBar` 组合，固定移动端页面骨架，降低布局漂移

## 安装

```bash
npm install
```

## 构建

```bash
npm run build
```

构建产物在 `dist`，并导出 `tokens.css` 供业务系统统一引用。

## 使用示例

```tsx
import {
  Button,
  SearchBar,
  MobilePage,
  PageSection,
  StatCard,
  BottomActionBar,
} from "@workspace/mobile-design-system";
import "@workspace/mobile-design-system/tokens.css";

export function Demo() {
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

## 下一步建议

- 增加 `Table / FilterBar / Steps / Dialog / Empty / Skeleton`
- 增加 `WarehouseScanInput / SalesOrderCard / ProcessTimeline` 业务组件
- 接入 Storybook 做组件文档与状态矩阵展示
- 使用 Style Dictionary 将 `tokens.json` 自动生成多端变量
