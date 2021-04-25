import React, { useEffect, useState } from 'react'
import './TableCurrency.scss'
import { FormControl, InputGroup, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { filterCoinsAction, getCurrencyAction, setInput } from '../../Store/actions/TableAction'

export const TableCurrency = () => {

    const dispatch = useDispatch()

    const [base, setBase] = useState('Курс к рублю')
    const [cls, setCls] = useState(['hight', 'low'])

    useEffect(() => {
        dispatch(getCurrencyAction())
    }, [])

    const changeInput = event => {
        dispatch(setInput(event.target.value))
        dispatch(filterCoinsAction(event.target.value, allCoins))
    }

    const coins = useSelector(state => state.table.coins)
    const allCoins = useSelector(state => state.table.allCoins)

    const changeBase = () => {
        if (base === 'Курс к рублю') {
            setBase('Курс к валюте')
            setCls(['low', 'hight'])
        } else {
            setBase('Курс к рублю')
            setCls(['hight', 'low'])
        }
    }

    return (
        <div className='wrapper'>
            <InputGroup size="sm" className="mb-3 input">
                <FormControl
                    placeholder='Поиск'
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={event => changeInput(event)}
                />
            </InputGroup>
            <Table
                striped
                bordered
                hover >
                <thead>
                    <tr>
                        <th>Валюта</th>
                        <th>Код валюты</th>
                        <th className='base' onClick={() => changeBase()}>
                            <div className='baseWrapper'>
                                {base}
                                {base === 'Курс к рублю'
                                    ? <span className="material-icons">
                                        expand_more
                                    </span>
                                    : <span className="material-icons">
                                        expand_less
                                    </span>
                                }
                            </div>
                        </th>
                        <th>Изменение</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(coins).map((coin, index) => {
                        return (
                            <tr key={index}>
                                <td>{coin.Name}</td>
                                <td>{coin.Nominal} {coin.CharCode}</td>
                                <td>
                                    {base === 'Курс к рублю' ?
                                        coin.Value
                                        : (1 / coin.Value).toFixed(3)
                                    }
                                </td>
                                <td
                                    className={`${coin.Value < coin.Previous ? cls[1] : cls[0]} `}
                                >
                                    {
                                        base === 'Курс к рублю' ?
                                            (
                                                coin.Value < coin.Previous ?
                                                    <span className="material-icons">
                                                        south
                                                    </span> :
                                                    <span className="material-icons">
                                                        north
                                                    </span>
                                            )
                                            :
                                            (
                                                coin.Value < coin.Previous ?
                                                    <span className="material-icons">
                                                        north
                                                    </span> :
                                                    <span className="material-icons">
                                                        south
                                                    </span>
                                            )
                                    }
                                    {
                                        base === 'Курс к рублю' ?
                                            (coin.Value - coin.Previous).toFixed(3)
                                            : (((coin.Value - coin.Previous) / coin.Value) * 1 / coin.Value).toFixed(5) * (-1)
                                    }

                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}