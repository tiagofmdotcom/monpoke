import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './button'

const meta: Meta = {
  title: 'Components/Button',
  render: () => html`<navigation-button>Load more</navigation-button>`,
}

export default meta

type Story = StoryObj

export const Default: Story = {}

export const Disabled: Story = {
  render: () => html`<navigation-button disabled>Load more</navigation-button>`,
}
