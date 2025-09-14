// Test CORS configuration
// Run this with: node test-cors.js

const testCors = async () => {
  const testUrl = 'http://localhost:5001/api/partners';
  
  console.log('🧪 Testing CORS configuration...');
  console.log('📍 Testing URL:', testUrl);
  
  try {
    // Test GET request
    console.log('\n1. Testing GET request...');
    const getResponse = await fetch(testUrl, {
      method: 'GET',
      headers: {
        'Origin': 'https://officebanao-clone.vercel.app',
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ GET Status:', getResponse.status);
    console.log('✅ CORS Headers:');
    console.log('   - Access-Control-Allow-Origin:', getResponse.headers.get('Access-Control-Allow-Origin'));
    console.log('   - Access-Control-Allow-Methods:', getResponse.headers.get('Access-Control-Allow-Methods'));
    console.log('   - Access-Control-Allow-Headers:', getResponse.headers.get('Access-Control-Allow-Headers'));
    
    // Test OPTIONS request (preflight)
    console.log('\n2. Testing OPTIONS request (preflight)...');
    const optionsResponse = await fetch(testUrl, {
      method: 'OPTIONS',
      headers: {
        'Origin': 'https://officebanao-clone.vercel.app',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      }
    });
    
    console.log('✅ OPTIONS Status:', optionsResponse.status);
    console.log('✅ Preflight Headers:');
    console.log('   - Access-Control-Allow-Origin:', optionsResponse.headers.get('Access-Control-Allow-Origin'));
    console.log('   - Access-Control-Allow-Methods:', optionsResponse.headers.get('Access-Control-Allow-Methods'));
    console.log('   - Access-Control-Allow-Headers:', optionsResponse.headers.get('Access-Control-Allow-Headers'));
    
    console.log('\n🎉 CORS test completed successfully!');
    
  } catch (error) {
    console.error('❌ CORS test failed:', error.message);
  }
};

testCors();
