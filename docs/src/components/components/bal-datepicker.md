# bal-datepicker <Badge text="Two-way binding"/>

<!-- START: human documentation top -->

A datepicker allows manual date entry as well as open the dropdown content with a calendar to select a date.

<!-- END: human documentation top -->

## Basic

In this example the user can only select a date. For that use the property `readonly`.

<ClientOnly><docs-demo-bal-datepicker-32></docs-demo-bal-datepicker-32></ClientOnly>


## Disabled

<ClientOnly><docs-demo-bal-datepicker-33></docs-demo-bal-datepicker-33></ClientOnly>


## Manual Input

To enable manual input remove the property `readonly` and add the property `trigger-ico`. The `trigger-ico` property only opens the dropdown when the icon gets clicked.

<ClientOnly><docs-demo-bal-datepicker-34></docs-demo-bal-datepicker-34></ClientOnly>


## Inverted & Expanded

<ClientOnly><docs-demo-bal-datepicker-35></docs-demo-bal-datepicker-35></ClientOnly>


## i18n

<ClientOnly><docs-demo-bal-datepicker-36></docs-demo-bal-datepicker-36></ClientOnly>


## Footer

<ClientOnly><docs-demo-bal-datepicker-37></docs-demo-bal-datepicker-37></ClientOnly>


## Range Min & Max

<ClientOnly><docs-demo-bal-datepicker-38></docs-demo-bal-datepicker-38></ClientOnly>


## Allow Dates

You can specify allowed dates using a function.

<ClientOnly><docs-demo-bal-datepicker-39></docs-demo-bal-datepicker-39></ClientOnly>


## Custom Start Date

<ClientOnly><docs-demo-bal-datepicker-40></docs-demo-bal-datepicker-40></ClientOnly>



## API

### bal-datepicker

#### Properties

| Attribute           | Description                                                                                                                                                                                                                                                                                                                                                             | Type                              | Default        |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- | :------------- |
|                     | Callback to determine which date in the datepicker should be selectable.                                                                                                                                                                                                                                                                                                | `(datestring: string) => boolean` | `_ => true`    |
| **bal-tabindex**    | The tabindex of the control.                                                                                                                                                                                                                                                                                                                                            | `number`                          | `0`            |
| **close-on-select** | Closes the datepicker dropdown after selection                                                                                                                                                                                                                                                                                                                          | `boolean`                         | `true`         |
| **debounce**        | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.                                                                                                                                                                                                 | `number`                          | `0`            |
| **default-date**    | The date to defines where the datepicker popup starts. The prop accepts ISO 8601 date strings (YYYY-MM-DD).                                                                                                                                                                                                                                                             | `null , string , undefined`       |                |
| **disabled**        | If `true` the component is diabled.                                                                                                                                                                                                                                                                                                                                     | `boolean`                         | `false`        |
| **expanded**        | If `true` the component uses the whole width.                                                                                                                                                                                                                                                                                                                           | `boolean`                         | `false`        |
| **inverted**        | Set this to `true` when the component is placed on a dark background.                                                                                                                                                                                                                                                                                                   | `boolean`                         | `false`        |
| **locale**          | If `true` the component uses the whole width.                                                                                                                                                                                                                                                                                                                           | `"de" , "en" , "fr" , "it"`       | `'en'`         |
| **max**             | The maximum datetime allowed. Value must be a date string following the [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime), `1996-12-19`. The format does not have to be specific to an exact datetime. For example, the maximum could just be the year, such as `1994`. Defaults to the end of this year.                                        | `string , undefined`              |                |
| **max-year**        | Latest year available for selection                                                                                                                                                                                                                                                                                                                                     | `number , undefined`              | `undefined`    |
| **min**             | The minimum datetime allowed. Value must be a date string following the [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime), such as `1996-12-19`. The format does not have to be specific to an exact datetime. For example, the minimum could just be the year, such as `1994`. Defaults to the beginning of the year, 100 years ago from today. | `string , undefined`              |                |
| **min-year**        | Earliest year available for selection                                                                                                                                                                                                                                                                                                                                   | `number , undefined`              | `undefined`    |
| **name**            | The name of the control, which is submitted with the form data.                                                                                                                                                                                                                                                                                                         | `string`                          | `this.inputId` |
| **placeholder**     | The text to display when the select is empty.                                                                                                                                                                                                                                                                                                                           | `string , undefined`              |                |
| **readonly**        | If `true` the use can only select a date.                                                                                                                                                                                                                                                                                                                               | `boolean`                         | `false`        |
| **required**        | If `true` the attribute required is added to the native input.                                                                                                                                                                                                                                                                                                          | `boolean`                         | `false`        |
| **trigger-icon**    | If `true` the datepicker only open on click of the icon                                                                                                                                                                                                                                                                                                                 | `boolean`                         | `false`        |
| **value**           | The value of the form field, which accepts ISO 8601 date strings (YYYY-MM-DD).                                                                                                                                                                                                                                                                                          | `null , string , undefined`       |                |

#### Events

| Event         | Description                             | Type                        |
| :------------ | :-------------------------------------- | :-------------------------- |
| **balBlur**   | Emitted when the input loses focus.     | `FocusEvent`                |
| **balChange** | Emitted when a option got selected.     | `null | string | undefined` |
| **balFocus**  | Emitted when the input has focus.       | `FocusEvent`                |
| **balInput**  | Emitted when a keyboard input occurred. | `string`                    |

#### Methods

| Method                | Description                                               | Signature                                        |
| :-------------------- | :-------------------------------------------------------- | :----------------------------------------------- |
| **`close`**           | Closes the dropdown                                       | `close() => Promise<void>`                       |
| **`getInputElement`** | Returns the native `<input>` element used under the hood. | `getInputElement() => Promise<HTMLInputElement>` |
| **`open`**            | Opens the dropdown                                        | `open() => Promise<void>`                        |
| **`select`**          | Selects an option                                         | `select(datestring: string) => Promise<void>`    |
| **`setFocus`**        | Sets the focus on the input element                       | `setFocus() => Promise<void>`                    |

## Testing

### DatepickerAccessor

DatepickerAccessor is a helper object for E-2-E testing.
It maps the datepicker behaviour to the `bal-datepicker` ui component.

```typescript
import { dataTestSelector, DatepickerAccessor } from '@baloise/design-system-components-testing'

describe('Datepicker', () => {
  it('should ...', () => {
     const datepicker = DatepickerAccessor(dataTestSelector('datepicker-id')).get()
     datepicker.open()
     datepicker.pick(new Date())
     datepicker.shouldHaveValue(new Date())
 })
})
```

#### Methods

| Method                | Description                    | Arguments                                     |
| :-------------------- | :----------------------------- | :-------------------------------------------- |
| **write**             | Write in the datepicker        | `date: string`                                |
| **open**              | Open the datepicker            |                                               |
| **pick**              | Pick the date                  | `date: Date`                                  |
| **shouldHaveValue**   | Check if datepicker have value | `date: Date`                                  |
| **assertDateInRange** | Assert if the date is in range | `date: Date, shouldBeInRange: boolean = true` |

<!-- START: human documentation bottom -->

<!-- END: human documentation bottom -->


## Links

* [Documentation on Github](https://github.com/baloise/design-system/blob/master/docs/src/components/components/bal-datepicker.md)
* [Implementation on Github](https://github.com/baloise/design-system/blob/master/packages/components/src/components/bal-datepicker)
* [Accessor on Github](https://github.com/baloise/design-system/blob/master/packages/testing/src/accessors/datepicker.accessor.ts)

<ClientOnly>
  <docs-component-script tag="balDatepicker"></docs-component-script>
</ClientOnly>
