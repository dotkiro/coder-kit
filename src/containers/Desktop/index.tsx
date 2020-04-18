import React, { useState, useEffect, memo, FC } from 'react'
import Card from '../../components/Card'
import AppDock from '../../components/AppDock'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Store } from '../../store'
import { desktop as desktopDispatchers } from '../../dispatchers'
import style from './style.less'

const Desktop: FC = () => {

  const [ focusIndex, setFocusIndex ] = useState(0)

  const { cards, applications } = useSelector((state: Store) => state.desktop)
  useEffect(() => {
    if (cards.length > 0) {
      setFocusIndex(cards.length - 1)
    }
  }, [cards])

  const onTapDockApp = (appCode: string): void => {
    if (!cards.some((card) => card.appCode === appCode)) {
      desktopDispatchers.showCard(appCode)
    }
  }

  return <div className={style.desktop}>

    <AppDock applications={applications} onTapItem={onTapDockApp}/>

    <div className={style.workArea}>
      {
        cards.map((item, index) => <Card
          key={item.key}
          title={item.title}
          isFocus={focusIndex === index}
          Content={item.component}
          onHide={(): void => desktopDispatchers.hideCard(index)}
          onFocus={(): void => setFocusIndex(index)}
        >
          <div>32</div>
        </Card>)
      }
    </div>

  </div>
}


export default withRouter(memo(Desktop))