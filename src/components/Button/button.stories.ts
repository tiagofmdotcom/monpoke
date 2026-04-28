import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { fn } from 'storybook/test';
import { html } from 'lit'
import './button'

const meta: Meta = {
  title: 'Components/Button',
  args: {
    label: 'Load more',
    click: fn(),
  },
  render: (args) => html`<navigation-button @click=${args.click}>${args.label}</navigation-button>`,
}

export default meta

type Story = StoryObj

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => html`<navigation-button ?disabled=${args.disabled} @click=${args.click}>${args.label}</navigation-button>`,
}
