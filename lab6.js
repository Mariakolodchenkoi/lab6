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

async function processDataStream(stream) {
  let totalProcessed = 0;
  let sum = 0;

  for await (const chunk of stream) {
    sum += chunk.value;
    totalProcessed++;
    
    if (chunk.id % 100 === 0) {
      console.log(`Progress: ${chunk.id}`);
    }
  }

  return {
    total: totalProcessed,
    average: sum / totalProcessed
  };
}
