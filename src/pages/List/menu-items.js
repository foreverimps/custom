const item = {
  img: require('../../assets/list/f67c1913aa70bcccec928696db0f877d.png'),
  name: '东辰瞑瀚 美式loft实木电脑桌办公桌实木…',
  star: 5,
  hot: 256,
  sort: 1,
  amount: 5693
};

export default Array.from({ length: 17 })
  .fill(item)
  .map((item, index) => ({ ...item, guid: index }));
