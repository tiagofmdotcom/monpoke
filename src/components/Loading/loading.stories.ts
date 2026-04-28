import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './loading'

const meta: Meta = {
  title: 'Components/Loading',
  render: () => html`<loading-indicator></loading-indicator>`,
}

export default meta

type Story = StoryObj

export const Default: Story = {}

export const CustomMessage: Story = {
  render: () => html`<loading-indicator message="Fetching products..."></loading-indicator>`,
}
