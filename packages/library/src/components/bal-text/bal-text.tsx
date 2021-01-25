import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'bal-text',
  styleUrl: 'bal-text.scss',
  shadow: false,
  scoped: false,
})
export class Text {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
