import React from 'react'
import Search from './Search'
import { connect } from 'react-redux'
import Exchange from './Exchange'
import Cart from './Cart'
const TopPanelContainer = (props) => {
    return (
        <div className="container">
            <div className="row text-right">
                <div className="col-sm">

                </div>
                <div className="col-sm">
                    <Search search={props.search} tru={props.tru} fal={props.fal} />
                </div>
                <div className="col-sm-1">
                    <Exchange exange={props.exch} truEx={props.truEx} falEx={props.falEx}/>
                </div>
                <div className="col-sm-1">
                    <Cart/>
                </div>
            </div>
        </div>
    )
}

const setPath = state => ({
    search: state.search,
    exch:state.exchange
})

const toProps = dispatch => ({
    tru: () => dispatch({ type: 'SEAR_TRUE' }),
    fal: () => dispatch({ type: 'SEAR_FALSE' }),
    truEx: () => dispatch({ type: 'EXCHANGE_TRUE' }),
    falEx: () => dispatch({ type: 'EXCHANGE_FALSE' })
})
const mapDispatchToProps = toProps
const mapStateToProps = setPath

export default connect(mapStateToProps, mapDispatchToProps)(TopPanelContainer);