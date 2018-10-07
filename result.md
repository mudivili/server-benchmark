
# Express
```
$ wrk -t2 -c10 -d10s http://localhost:3000
Running 10s test @ http://localhost:3000
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.81ms    1.47ms  39.78ms   94.88%
    Req/Sec     2.96k   720.31     3.49k    86.00%
  58974 requests in 10.00s, 15.13MB read
Requests/sec:   5895.48
Transfer/sec:      1.51MB
```
# Fastify
```
$ wrk -t2 -c10 -d10s http://localhost:3000
Running 10s test @ http://localhost:3000
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.93ms    1.04ms  32.58ms   96.78%
    Req/Sec     5.92k     1.20k    6.57k    90.00%
  117798 requests in 10.00s, 22.92MB read
Requests/sec:  11779.02
Transfer/sec:      2.29MB
```

# Polka
```
$ wrk -t2 -c10 -d10s http://localhost:3000
Running 10s test @ http://localhost:3000
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.87ms    0.95ms  30.10ms   97.41%
    Req/Sec     6.24k     1.16k    6.94k    91.00%
  124266 requests in 10.00s, 18.61MB read
Requests/sec:  12425.92
Transfer/sec:      1.86MB

# Micro
```
$ wrk -t2 -c10 -d10s http://localhost:3000
Running 10s test @ http://localhost:3000
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.96ms    0.95ms  30.02ms   97.08%
    Req/Sec     5.64k     1.11k   12.07k    90.55%
  112778 requests in 10.10s, 21.94MB read
Requests/sec:  11166.07
Transfer/sec:      2.17MB 
```

# Express
```
$ wrk -t12 -c400 -d30s http://localhost:3000
Running 30s test @ http://localhost:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    70.13ms   23.37ms 793.57ms   95.93%
    Req/Sec   479.41    143.21   666.00     50.35%
  170421 requests in 30.09s, 43.72MB read
Requests/sec:   5663.16
Transfer/sec:      1.45MB
```
# Fastify
```
$ wrk -t12 -c400 -d30s http://localhost:3000
Running 30s test @ http://localhost:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    35.84ms    5.78ms 445.34ms   96.59%
    Req/Sec     0.92k   139.51     1.00k    89.78%
  329528 requests in 30.04s, 64.11MB read
Requests/sec:  10968.51
Transfer/sec:      2.13MB
```
# Polka
```
$ wrk -t12 -c400 -d30s http://localhost:3000
Running 30s test @ http://localhost:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    33.91ms    5.97ms 404.57ms   97.58%
    Req/Sec     0.98k   115.07     1.18k    91.53%
  349368 requests in 30.04s, 52.31MB read
Requests/sec:  11630.74
Transfer/sec:      1.74MB
```
# Micro
```
$ wrk -t12 -c400 -d30s http://localhost:3000
Running 30s test @ http://localhost:3000
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    37.53ms    6.90ms 400.67ms   98.39%
    Req/Sec     0.88k   142.23     1.18k    84.77%
  314897 requests in 30.06s, 61.26MB read
Requests/sec:  10476.53
Transfer/sec:      2.04MB
```

