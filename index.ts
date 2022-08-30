import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    const db = client.db('hello');
    const res = await db.command({ ping: 1 });
    console.log('connected', res);
    //数据插入
    const userCollection = db.collection('user');
    // const result = await userCollection.insertOne({ name: 'ad', age: 20 });
    // console.log(result);
    const records = [
      { name: 'lisi', age: 30 },
      { name: 'wangwu', age: 35 },
    ];
    const resultMany = await userCollection.insertMany(records);
    console.log(resultMany);
    //查询
    // const result = await userCollection.findOne({ name: 'keep' });
    // console.log(result);
    // const course = userCollection.find();
    //1 foreach
    // await course.forEach((item) => console.log(item));
    //2 使用toArray()
    const results = await userCollection.find().toArray();
    console.log(results);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

run();
