import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Icon,
  ICON_NAMES,
  SYSTEM_ICON_NAMES,
  KEYBOARD_ICONS_NAMES,
} from "./index";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// 所有图标展示
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        padding: "20px",
        maxWidth: "1200px",
      }}
    >
      {/* 系统图标 */}
      <div>
        <h3
          style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}
        >
          System Icons
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {SYSTEM_ICON_NAMES.map((name) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Icon name={name} size={32} />
              <span style={{ fontSize: "12px" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 键盘图标 */}
      <div>
        <h3
          style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}
        >
          Keyboard Icons
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {KEYBOARD_ICONS_NAMES.map((name) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Icon name={name} size={32} />
              <span style={{ fontSize: "12px" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 其他图标 */}
      <div>
        <h3
          style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}
        >
          Default Icons
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: "16px",
          }}
        >
          {ICON_NAMES.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                padding: "16px",
                border: "1px solid var(--pos-ui-border-color)",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--pos-ui-primary-color)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--pos-ui-border-color)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Icon name={name} size={32} />
              <span style={{ fontSize: "12px", textAlign: "center" }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 尺寸对比 */}
      <div>
        <h3
          style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}
        >
          Sizes
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Icon name="heart" size={16} />
            <span style={{ fontSize: "12px" }}>16px</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Icon name="heart" size={24} />
            <span style={{ fontSize: "12px" }}>24px</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Icon name="heart" size={32} />
            <span style={{ fontSize: "12px" }}>32px</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Icon name="heart" size={48} />
            <span style={{ fontSize: "12px" }}>48px</span>
          </div>
        </div>
      </div>

      {/* 旋转动画 */}
      <div>
        <h3
          style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}
        >
          Spin Animation
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Icon name="loading" size={32} spin />
        </div>
      </div>

      {/* 在按钮中使用 */}
      <div>
        <h3
          style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}
        >
          In Buttons
        </h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              border: "1px solid var(--pos-ui-border-color)",
              borderRadius: "6px",
              background: "var(--pos-ui-primary-color)",
              color: "white",
              cursor: "pointer",
            }}
          >
            <Icon name="heart" size={16} />
            Like
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              border: "1px solid var(--pos-ui-border-color)",
              borderRadius: "6px",
              background: "var(--pos-ui-bg-color)",
              cursor: "pointer",
            }}
          >
            <Icon name="search" size={16} />
            Search
          </button>
        </div>
      </div>
    </div>
  ),
};
