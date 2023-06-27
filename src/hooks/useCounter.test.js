import { renderHook, act } from "@testing-library/react"
import useCounter from './useCounter'
// import { act } from "react-dom/test-utils"


describe('useCounter', () => {
    test('should render the initial count', () => {
        const { result } = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })
    test('should render the increase value', () => {
        const { result } = renderHook(useCounter)
        act(() => result.current.increase())
        expect(result.current.count).toBe(1)
    })
    test('should render the decrease value', () => {
        const { result } = renderHook(useCounter)
        act(() => result.current.decrease())
        expect(result.current.count).toBe(-1)
    })



})
