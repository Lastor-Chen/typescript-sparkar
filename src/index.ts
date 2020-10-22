import * as Scene from 'Scene'
import * as TouchGestures from 'TouchGestures'
import * as Diagnostics from 'Diagnostics'

import { Text } from './Text'
const text = new Text('text')

async function init() {
  try {
    const assets = await Promise.all([
      Scene.root.findFirst('plane0'),
    ])
    const plane: SceneObjectBase = assets[0]

    text.setContext('Tap the plane')

    // onTap returns a type "any" in SparkAR v99, we need to assert it is a EventSource
    const onTap: EventSource = TouchGestures.onTap(plane)
    onTap.subscribe(() => {
      Diagnostics.log(plane.name)
      text.setContext('Hello World')
    })

    Diagnostics.log('App is running')

  } catch (e) {
    Diagnostics.log(e.stack || e)
  }
}

init()