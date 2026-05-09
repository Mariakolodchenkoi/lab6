async function* largeDataFactory(count) {
  for (let i = 1; i <= count; i++) {
    await new Promise(resolve => setTimeout(resolve, 10)); 
    
    yield {
      id: i,
      value: Math.random() * 100,
      timestamp: new Date().toISOString()
    };
  }
}

export { largeDataFactory };