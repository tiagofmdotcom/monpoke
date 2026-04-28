import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './loading'

const meta: Meta = {
  title: 'Components/Loading',
  args: {
    message: '',
  },
  render: (args) => html`<loading-indicator message=${args.message}></loading-indicator>`,
}

export default meta

type Story = StoryObj

export const Default: Story = {}

export const CustomMessage: Story = {
  args: {
    message: 'Fetching products...',
  },
  render: (args) => html`<loading-indicator message=${args.message}></loading-indicator>`,
}
