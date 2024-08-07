import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { Button } from '@/components/ui/button'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Button variant="outline"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <span>{count}</span>
      <Button variant="outline"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
      <Button variant="outline"
      aria-label='Inc By Amount'
      onClick={() => dispatch(incrementByAmount(5))}
      >Increment By 5</Button>
    </div>
  )
}