import React from 'react'
import { useEffect } from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { quantityExchange, setAction1, setAction2 } from '../../Store/actions/ConverterAction'
import { getCurrencyAction } from '../../Store/actions/TableAction'
import classes from './Converter.module.scss'

export const Converter = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrencyAction())
    }, [])

    let area1 = useSelector(state => state.converter.area1)
    let area2 = useSelector(state => state.converter.area2)
    const coins = useSelector(state => state.table.allCoins)
    const quintity = useSelector(state => state.converter.quintity)
    const nominal1 = Object.values(area1)[3]
    const nominal2 = Object.values(area2)[3]
    let price1 = Object.values(area1)[5]
    let price2 = Object.values(area2)[5]
    let priceToCoin = (((quintity * price1) / nominal1) / (price2 / nominal2)).toFixed(3)

    const setArea1 = (event) => {
        const value = Object.values(coins).filter(coin => {
            return coin.CharCode === event
        })
        dispatch(setAction1(value[0]))
    }

    const setArea2 = (event) => {
        const value = Object.values(coins).filter(coin => {
            return coin.CharCode === event
        })
        dispatch(setAction2(value[0]))
    }

    const valueCurrency1 = (event) => {
        dispatch(quantityExchange(event.target.value))
    }

    const changePlaces = () => {
        dispatch(setAction1(area2))
        dispatch(setAction2(area1))
        dispatch(quantityExchange(priceToCoin))

    }

    const removeZero = (value) => {
        if (value === '0') {
            dispatch(quantityExchange(''))
        } else {
            return
        }
    }

    return (
        <div>
            <Form className={classes.form}>
                <div className={classes.formWrapper}>
                    <Form.Group className={classes.formGroup}>
                        <Form.Label htmlFor='area1' >
                            {Object.values(area1)[4]}
                        </Form.Label>
                        <div className={classes.inputs}>
                            <Form.Control
                                as="select"
                                size="sm"
                                custom
                                value={Object.values(area1)[2]}
                                onChange={event => setArea1(event.target.value)}>
                                {Object.values(coins).map((coin, index) => {
                                    return (
                                        <option key={index}>{coin.CharCode}</option>
                                    )
                                })}
                            </Form.Control>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl
                                    type='number'
                                    onClick={event => removeZero(event.target.value)}
                                    value={quintity === 0 ? '' : quintity}
                                    id='area1'
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    onChange={event => valueCurrency1(event)}
                                />
                            </InputGroup>
                        </div>
                    </Form.Group>
                    <div onClick={() => changePlaces()} className={classes.arrow}>
                        <span className="material-icons">
                            sync
                        </span>
                    </div>
                    <Form.Group className={classes.formGroup}>
                        <Form.Label>
                            {Object.values(area2)[4]}
                        </Form.Label>
                        <div className={classes.inputs}>
                            <Form.Control
                                value={Object.values(area2)[2]}
                                as="select"
                                size="sm"
                                custom
                                onChange={event => setArea2(event.target.value)}>
                                {Object.values(coins).map((coin, index) => {
                                    return (
                                        <option key={index}>{coin.CharCode}</option>
                                    )
                                })}
                            </Form.Control>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl
                                    type='number'
                                    value={quintity === 0 ? '' : priceToCoin}
                                    readOnly
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                            </InputGroup>
                        </div>
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}