const DOM = {
  type: 'body',
  classNames: [],
  id: null,
  children: [
    {
      type: 'div',
      classNames: ['wrapper'],
      id: null,
      children: [
        {
          type: 'header',
          classNames: ['header', 'container', 'mb-8'],
          id: null,
          children: [],
        },
        {
          type: 'div',
          classNames: ['main', 'container', 'mb-8'],
          id: null,
          children: [
            {
              type: 'div',
              classNames: ['products', 'mb-8'],
              id: 'unicalId',
              children: [
                {
                  type: 'div',
                  classNames: ['product'],
                  id: null,
                  children: [],
                },
                {
                  type: 'div',
                  classNames: ['product'],
                  id: null,
                  children: [],
                },
                {
                  type: 'div',
                  classNames: ['product'],
                  id: null,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          type: 'footer',
          classNames: ['footer', 'container'],
          id: null,
          children: [],
        },
      ],
    },
  ],
};

function isMatch(element, selector) {
  if (selector.startsWith('.')) {
    const className = selector.slice(1)
    return element.classNames.includes(className)
  }
  
  if (selector.startsWith('#')) {
    const idName = selector.slice(1)
    return element.id === idName
  }
  
  return element.type === selector
}

function querySelector(selector, root = DOM) {
  if (isMatch(root, selector)) {
    return root
  }

  for (const child of root.children) {
    const found = querySelector(selector, child)
    if (found) {
      return found
    }
  }

  return null
}

function querySelectorAll(selector, root = DOM, result = []) {
  if (isMatch(root, selector)) {
    result.push(root)
  }
  for (const child of root.children) {
    querySelectorAll(selector, child, result)
  }

  return result
}


console.log("--- поиск первого .product ---")
const firstProduct = querySelector('.product')
console.log(firstProduct)

console.log("\n--- поиск по ID #unicalId ---")
const idElement = querySelector('#unicalId')
console.log(idElement)

console.log("\n--- поиск всех .container ---")
const allContainers = querySelectorAll('.container')
console.log(`найдено элементов: ${allContainers.length}`)
console.log(allContainers)

console.log("\n--- поиск несуществующего элемента ---")
const notFound = querySelector('video')
console.log(notFound)