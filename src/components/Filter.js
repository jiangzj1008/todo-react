import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import '../css/Filter.css'


class Filter extends Component {
    renderButton(filter) {
        const FILTER_TITLES = {
            [SHOW_ALL]: 'All',
            [SHOW_ACTIVE]: 'Active',
            [SHOW_COMPLETED]: 'Completed'
        }
        const title = FILTER_TITLES[filter]
        const onShow = this.props.onShow
        return (
            <a key={filter} onClick={() => onShow(filter)}>
                {title}
            </a>
        )
    }

    render() {
        const filterArr = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED]
        const ele = filterArr.map((filter) => {
            return this.renderButton(filter)
        })
        return (
            <section className="btns">{ele}</section>
        )
    }
}

export default Filter
