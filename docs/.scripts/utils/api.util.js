const table = require('markdown-table')
const { NEWLINE } = require('../../../.scripts/constants')
const { printCode, printBold } = require('./markdown.util')

const printComponent = component => {
  const lines = []
  lines.push(`### ${component.tag}`)
  lines.push('')

  if (component.isChild && component.readme) {
    component.readme.split(NEWLINE).forEach(line => lines.push(line))
  }

  if (component.props && component.props.length > 0) {
    lines.push(`#### Properties`)
    lines.push('')
    table(
      [
        ['Attribute', 'Description', 'Type', 'Default'],
        ...component.props.map(prop => [
          printBold(prop.attr),
          prop.docs.replace(/(?:\r\n|\r|\n)/g, ' ').trim(),
          printCode(prop.type ? prop.type.split('|').join(',') : ''),
          printCode(prop.default),
        ]),
      ],
      { align: ['l', 'l', 'l', 'l'] },
    )
      .split(NEWLINE)
      .forEach(l => lines.push(l))
  }

  if (component.events && component.events.length > 0) {
    lines.push('')
    lines.push(`#### Events`)
    lines.push('')
    table(
      [
        ['Event', 'Description', 'Type'],
        ...component.events.map(eventItem => [
          printBold(eventItem.event),
          eventItem.docs.trim(),
          printCode(eventItem.detail),
        ]),
      ],
      { align: ['l', 'l', 'l'] },
    )
      .split(NEWLINE)
      .forEach(l => lines.push(l))
  }

  if (component.methods && component.methods.length > 0) {
    lines.push('')
    lines.push(`#### Methods`)
    lines.push('')
    table(
      [
        ['Method', 'Description', 'Signature'],
        ...component.methods.map(method => [
          printBold(printCode(method.name)),
          method.docs.trim(),
          printCode(method.signature),
        ]),
      ],
      { align: ['l', 'l', 'l'] },
    )
      .split(NEWLINE)
      .forEach(l => lines.push(l))
  }

  return lines.join(NEWLINE)
}

const hasApiContent = component => {
  if (component.props && component.props.length > 0) {
    return true
  }
  if (component.events && component.events.length > 0) {
    return true
  }
  if (component.methods && component.methods.length > 0) {
    return true
  }
  return false
}

const parse = (components, component) => {
  const lines = []
  if (hasApiContent(component)) {
    lines.push(`## API`)
    lines.push(``)
    lines.push(printComponent(component))
    component.childComponents.forEach(childTag => {
      lines.push('')
      lines.push(printComponent(components.get(childTag)))
    })
  }

  return lines.join(NEWLINE)
}

module.exports = {
  parse,
}
