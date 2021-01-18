import { Component, h, Host, Prop } from '@stencil/core'
import { BalButtonType } from '../bal-button/bal.button.type'

@Component({
  tag: 'bal-icon',
  styleUrl: 'bal-icon.scss',
  shadow: false,
  scoped: true,
})
export class Icon {
  /**
   * The name of the icon without the bal-icon prefix.
   */
  @Prop() name = ''

  /**
   * Defines the size of the icon.
   */
  @Prop() size: 'xsmall' | 'small' | 'medium' | 'large' | '' = ''

  /**
   * The theme type of the button. Given by bulma our css framework.
   */
  @Prop() type: BalButtonType = 'info'

  /**
   * If `true` the button is inverted
   */
  @Prop() inverted: boolean

  /**
   * If `true` the icon rotates like for a loading spinner
   */
  @Prop() rotate = false

  /**
   * If `true` the icon is rotated 180deg
   */
  @Prop() turn = false

  render() {
    const SvgIcon = `bal-icon-${this.name}`

    return (
      <Host
        class={{
          [`is-size-${this.size}`]: !!this.size,
          [`is-inverted`]: this.inverted,
          [`is-${this.type}`]: true,
          [`turn`]: this.turn,
          [`rotate`]: this.rotate,
        }}>
        <SvgIcon class="bal-icon-inner"></SvgIcon>
      </Host>
    )
  }
}
