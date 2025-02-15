# bal-data

<!-- START: human documentation top -->

A data component display readonly form data.

<!-- END: human documentation top -->

## Basic

<ClientOnly><docs-demo-bal-data-30></docs-demo-bal-data-30></ClientOnly>


## Horizontal

<ClientOnly><docs-demo-bal-data-31></docs-demo-bal-data-31></ClientOnly>



## API

### bal-data

#### Properties

| Attribute      | Description                                                | Type      | Default |
| :------------- | :--------------------------------------------------------- | :-------- | :------ |
| **border**     | If `true` a bottom border is added to the data-item.       | `boolean` | `false` |
| **horizontal** | If `true` the data list is horizontal instead of vertical. | `boolean` | `false` |

### bal-data-item


# bal-data-item

`bal-data-item` is a child component of `bal-data` that adds a new row item.


#### Properties

| Attribute    | Description                                   | Type      | Default |
| :----------- | :-------------------------------------------- | :-------- | :------ |
| **disabled** | If `true` the item gets a lighter font color. | `boolean` | `false` |

### bal-data-label


# bal-data-item-label

`bal-data-item` is a child component of `bal-data` that defines the label of the data.

#### Properties

| Attribute    | Description                                    | Type      | Default |
| :----------- | :--------------------------------------------- | :-------- | :------ |
| **required** | If `true` an asterix is added after the label. | `boolean` | `false` |

### bal-data-value


# bal-data-item-value

`bal-data-item` is a child component of `bal-data` that defines the value of the data.

#### Properties

| Attribute    | Description                                                           | Type      | Default |
| :----------- | :-------------------------------------------------------------------- | :-------- | :------ |
| **editable** | If `true` a small button with a edit icon will be shown on the right. | `boolean` | `false` |

#### Events

| Event        | Description                               | Type         |
| :----------- | :---------------------------------------- | :----------- |
| **balBlur**  | Emitted when the edit button loses focus. | `void`       |
| **balClick** | Emitted when the edit button has focus.   | `MouseEvent` |
| **balFocus** | Emitted when the edit button has focus.   | `void`       |



<!-- START: human documentation bottom -->

<!-- END: human documentation bottom -->


## Links

* [Documentation on Github](https://github.com/baloise/design-system/blob/master/docs/src/components/components/bal-data.md)
* [Implementation on Github](https://github.com/baloise/design-system/blob/master/packages/components/src/components/bal-data)
