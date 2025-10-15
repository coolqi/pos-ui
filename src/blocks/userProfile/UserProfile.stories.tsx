import type { Meta, StoryObj } from '@storybook/react';
import UserProfile from './index';

const meta = {
  title: 'Blocks/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

// 所有变体展示在一页
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '20px', maxWidth: '1200px' }}>
      {/* 基础状态 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Online / Offline Status</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
          <UserProfile
            user={{
              id: '1',
              name: '张三',
              email: 'zhangsan@example.com',
              role: '管理员',
              joinDate: '2023-01-01',
              isOnline: true,
            }}
            onEdit={(user) => console.log('Edit user:', user)}
            onMessage={(user) => console.log('Message user:', user)}
            onFollow={(user) => console.log('Follow user:', user)}
          />
          
          <UserProfile
            user={{
              id: '2',
              name: '李四',
              email: 'lisi@example.com',
              role: '用户',
              joinDate: '2023-06-15',
              isOnline: false,
            }}
            onEdit={(user) => console.log('Edit user:', user)}
            onMessage={(user) => console.log('Message user:', user)}
            onFollow={(user) => console.log('Follow user:', user)}
          />
        </div>
      </div>

      {/* 带头像 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>With Avatar</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
          <UserProfile
            user={{
              id: '3',
              name: '王五',
              email: 'wangwu@example.com',
              role: '编辑',
              joinDate: '2023-03-20',
              isOnline: true,
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            }}
            onEdit={(user) => console.log('Edit user:', user)}
            onMessage={(user) => console.log('Message user:', user)}
            onFollow={(user) => console.log('Follow user:', user)}
          />
          
          <UserProfile
            user={{
              id: '4',
              name: '赵六',
              email: 'zhaoliu@example.com',
              role: '作者',
              joinDate: '2023-08-10',
              isOnline: false,
              avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
            }}
            onEdit={(user) => console.log('Edit user:', user)}
            onMessage={(user) => console.log('Message user:', user)}
            onFollow={(user) => console.log('Follow user:', user)}
          />
        </div>
      </div>

      {/* 不同配置 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Different Configurations</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
          <UserProfile
            user={{
              id: '5',
              name: '孙七',
              email: 'sunqi@example.com',
              joinDate: '2023-05-01',
              isOnline: true,
            }}
            onEdit={(user) => console.log('Edit user:', user)}
            onMessage={(user) => console.log('Message user:', user)}
            onFollow={(user) => console.log('Follow user:', user)}
          />
          
          <UserProfile
            user={{
              id: '6',
              name: '周八',
              email: 'zhouba@example.com',
              role: '访客',
              isOnline: false,
            }}
            onEdit={(user) => console.log('Edit user:', user)}
            onMessage={(user) => console.log('Message user:', user)}
            onFollow={(user) => console.log('Follow user:', user)}
          />
          
          <UserProfile
            user={{
              id: '7',
              name: '吴九',
              email: 'wujiu@example.com',
              role: '成员',
              joinDate: '2023-02-14',
              isOnline: true,
            }}
            showActions={false}
          />
        </div>
      </div>

      {/* 长文本测试 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Long Text</h3>
        <div style={{ maxWidth: '450px' }}>
          <UserProfile
            user={{
              id: '8',
              name: '这是一个非常长的用户名用来测试布局',
              email: 'verylongemailaddress@verylongdomainname.com',
              role: '超级管理员',
              joinDate: '2023-01-01',
              isOnline: true,
            }}
            onEdit={(user) => console.log('Edit user:', user)}
            onMessage={(user) => console.log('Message user:', user)}
            onFollow={(user) => console.log('Follow user:', user)}
          />
        </div>
      </div>
    </div>
  ),
};


