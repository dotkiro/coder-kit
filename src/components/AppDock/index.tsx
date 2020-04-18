import React, {  memo, FC } from 'react'
import style from './style.less'
import { ROLE_BUTTON } from '../../utils'

type AppDockProps = {
  onTapItem: (appCode: string) => any;
  applications: any[];
}

const AppDock: FC<AppDockProps> = ({ applications, onTapItem }: AppDockProps) => {
  return <div className={style.appDock}>
    {
      applications.map((item, index) => <div
        role={ROLE_BUTTON}
        className={style.appDockItem}
        onClick={() => onTapItem(item.appCode)}
        key={index}
      >{item.title}</div>)
    }
  </div>
}

export default memo(AppDock)