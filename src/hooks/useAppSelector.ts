import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppStore } from '../store'

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector
