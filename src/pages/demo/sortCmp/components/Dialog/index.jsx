import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, Space, Card } from 'antd';
import styles from './index.less'

import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const state = {
  DEF: 0,
  DES: 1,
  ASC: 2
}

const tranformStatus = newStatus => {
  switch (newStatus) {
    case '0':
      return state.DEF
    case 'desc':
      return state.DES
    case 'asc':
      return state.ASC
    default:
      return state.DEF
  }
}

const SortButton = ({ children, clickButton, status }) => {
  status = tranformStatus(status)

  const changeSortState = newStatus => {
    // console.log(newStatus)
    switch (newStatus) {
      case state.DEF:
        return '0'
      case state.DES:
        return 'desc'
      case state.ASC:
        return 'asc'
      default:
        return '0'
    }
  }

  return (
    <>
      <span
        className={`${status === state.DEF
          ? styles.sortButtonNormal
          : styles.sortButtonActive
          }`}
        onClick={e => {
          e.stopPropagation()
          const newStatus = status === state.DES ? state.ASC : status + 1
          clickButton(changeSortState(newStatus))
        }}
      >
        <span>
          {children}
        </span>
        <span className={`${styles.sortIcon}`}>
          <CaretUpOutlined className={`${status === state.ASC
            ? styles.active
            : styles.normal
            }`}
            onClick={e => {
              e.stopPropagation();
              clickButton('asc');
            }}
          />

          <CaretDownOutlined className={`${status === state.DES
            ? styles.active
            : styles.normal
            }`}
            onClick={e => {
              e.stopPropagation();
              clickButton('desc');
            }}
          />
        </span>
      </span>
    </>
  )
}

export default SortButton