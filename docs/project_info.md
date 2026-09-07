# architecture
```
                         Client
                           │
                           ▼
                    ┌─────────────┐
                    │    Router   │
                    │   Apollo    │
                    │   Router    │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Supergraph │
                    │    Schema   │
                    └──────┬──────┘
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
       ┌──────────┐  ┌──────────┐  ┌──────────┐
       │  Users   │  │  Games   │  │ Reviews  │
       │ Subgraph │  │ Subgraph │  │ Subgraph │
       └──────────┘  └──────────┘  └──────────┘
```

# repo structure

```
graphql-federation-demo/

├── users/
│   ├── src/
│   │   ├── schema.ts
│   │   ├── resolvers.ts
│   │   └── index.ts
│   └── package.json
│
├── games/
│   ├── src/
│   │   ├── schema.ts
│   │   ├── resolvers.ts
│   │   └── index.ts
│   └── package.json
│
├── reviews/
│   ├── src/
│   │   ├── schema.ts
│   │   ├── resolvers.ts
│   │   └── index.ts
│   └── package.json
│
└── supergraph.yaml
```

```
rover dev --supergraph-config ./supergraph.yaml
```

```
Games :4001 ─┐
Users :4002 ─┼──> Rover ──> Supergraph + Router :4000
Reviews :4003 ┘
```

```
                supergraph.yaml
                       │
                       ▼
                    Rover
                       │
             ┌─────────┴─────────┐
             │                   │
       Compose schemas      Start router
             │                   │
             └─────────┬─────────┘
                       ▼
                 Router :4000
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Games         Users       Reviews
       :4001         :4002         :4003

```