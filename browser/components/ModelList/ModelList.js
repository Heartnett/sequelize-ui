import React from 'react'

import ModelListItem from './ModelListItem'

/*----------  UI LIBRARY COMPONENTS  ----------*/
import { List } from 'react-toolbox/lib/list'

/*----------  COMPONENT  ----------*/
const ModelList = ({ models, currentModel }) => (
  <div className="your-models">
    <List>
      <div>
        <h3>{models.length > 0 && 'Your Models'}</h3>
      </div>
      {models.map(model => (
        <ModelListItem
          key={model.id}
          model={model}
          currentModel={currentModel}
          isCurrent={model.id === currentModel.id}
        />
      ))}
    </List>
  </div>
)

export default ModelList
