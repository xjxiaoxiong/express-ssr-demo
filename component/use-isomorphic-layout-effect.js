// const { useLayoutEffect, useEffect } = require('react');
import { useLayoutEffect, useEffect } from 'react';

const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;
// module.exports = useIsomorphicLayoutEffect;
export default useIsomorphicLayoutEffect;