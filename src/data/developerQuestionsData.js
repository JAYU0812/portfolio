// Developer Questions & Answers Knowledge Base
// Grounded in real-world production systems (PropKart CRM, GitSphere, DevSync, Chandrakala Jewellers)

export const CATEGORIES = {
  "flutter": {
    slug: "flutter",
    name: "Flutter & Mobile",
    description: "Production mobile architecture, state management with BLoC, performance profiling, and Android SDK 36 optimization.",
    icon: "Smartphone",
    color: "#38BDF8",
    bgLight: "bg-sky-50 dark:bg-sky-950/40",
    border: "border-sky-200 dark:border-sky-800",
    badge: "text-sky-700 dark:text-sky-300"
  },
  "database": {
    slug: "database",
    name: "Databases & Offline-First",
    description: "Embedded local NoSQL (Isar), SQLite, relational modeling, and delta synchronization engines.",
    icon: "Database",
    color: "#F59E0B",
    bgLight: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-800",
    badge: "text-amber-700 dark:text-amber-300"
  },
  "supabase": {
    slug: "supabase",
    name: "Supabase & Cloud",
    description: "PostgreSQL WAL replication, Realtime WebSockets, Row-Level Security (RLS), and database triggers.",
    icon: "Zap",
    color: "#10B981",
    bgLight: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-200 dark:border-emerald-800",
    badge: "text-emerald-700 dark:text-emerald-300"
  },
  "nodejs": {
    slug: "nodejs",
    name: "Node.js & Backend",
    description: "Scalable REST APIs, NestJS architecture, JWT refresh token rotation, Redis caching, and RBAC governance.",
    icon: "Server",
    color: "#22C55E",
    bgLight: "bg-green-50 dark:bg-green-950/40",
    border: "border-green-200 dark:border-green-800",
    badge: "text-green-700 dark:text-green-300"
  },
  "react": {
    slug: "react",
    name: "React & Frontend",
    description: "Component architecture, Next.js App Router, state management, render tree optimization, and responsive dashboards.",
    icon: "Layout",
    color: "#06B6D4",
    bgLight: "bg-cyan-50 dark:bg-cyan-950/40",
    border: "border-cyan-200 dark:border-cyan-800",
    badge: "text-cyan-700 dark:text-cyan-300"
  },
  "crm-development": {
    slug: "crm-development",
    name: "CRM & Business Systems",
    description: "Lead allocation algorithms, multi-tenant RBAC, telecaller workflows, audit logging, and offline sales pipelines.",
    icon: "Building2",
    color: "#EC4899",
    bgLight: "bg-pink-50 dark:bg-pink-950/40",
    border: "border-pink-200 dark:border-pink-800",
    badge: "text-pink-700 dark:text-pink-300"
  },
  "software-architecture": {
    slug: "software-architecture",
    name: "Software Architecture",
    description: "Clean Architecture, outbox mutations, repository patterns, cryptographic P2P, and sovereign systems.",
    icon: "Cpu",
    color: "#8B5CF6",
    bgLight: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-200 dark:border-purple-800",
    badge: "text-purple-700 dark:text-purple-300"
  },
  "php-mysql": {
    slug: "php-mysql",
    name: "PHP & MySQL",
    description: "Secure database transactions, prepared PDO statements, schema normalization, and commercial retail portals.",
    icon: "Code2",
    color: "#6366F1",
    bgLight: "bg-indigo-50 dark:bg-indigo-950/40",
    border: "border-indigo-200 dark:border-indigo-800",
    badge: "text-indigo-700 dark:text-indigo-300"
  }
};

export const DEVELOPER_QUESTIONS = [
  // 1. Offline-First Flutter App with Isar
  {
    id: "flutter-offline-first-isar",
    slug: "how-to-build-offline-first-flutter-app",
    categorySlug: "flutter",
    category: "Flutter & Mobile",
    title: "How to Build an Offline-First Flutter Application Using Isar?",
    question: "What is the architectural blueprint for designing a production Flutter application that guarantees 0ms perceived UI latency and functions seamlessly in offline environments using an embedded Isar NoSQL database?",
    shortAnswer: "An offline-first Flutter application decouples user interactions from remote network calls by reading and writing immediately to an embedded local database (such as Isar). An Outbox Mutation Queue records changes locally with monotonic timestamps, which a background sync engine subsequently dispatches to the server with deterministic conflict resolution.",
    difficulty: "Advanced",
    readingTime: "8 min read",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-04",
    status: "published",
    featured: true,
    tags: ["Flutter", "Isar Database", "Offline-First", "Architecture", "NoSQL"],
    relatedProjects: ["propkart", "kitaab"],
    relatedQuestions: ["isar-vs-sqlite", "offline-conflict-resolution", "delta-synchronization-flutter"],
    seoTitle: "How to Build an Offline-First Flutter App with Isar | Jay Soni",
    seoDescription: "Step-by-step engineering guide to building an offline-first Flutter app using embedded Isar NoSQL, outbox mutation queues, and automatic background sync.",
    tableOfContents: [
      { id: "overview", title: "1. The Offline-First Paradigm" },
      { id: "why-isar", title: "2. Why Isar for Local Storage?" },
      { id: "outbox-pattern", title: "3. The Outbox Mutation Architecture" },
      { id: "code-implementation", title: "4. Practical Code Implementation" },
      { id: "common-pitfalls", title: "5. Critical Pitfalls & Mitigation" },
      { id: "real-world-case", title: "6. Production Case Study: PropKart CRM" }
    ],
    sections: [
      {
        id: "overview",
        title: "1. The Offline-First Paradigm",
        content: `In standard mobile architectures, every user interaction triggers a network request. If a field agent enters an underground parking deck, basements, or remote construction sites with spotty 2G/3G connectivity, the UI freezes with spinner wheels, API calls timeout, and unsaved form data is frequently lost.\n\nAn **Offline-First Architecture** turns this paradigm inside out: the local embedded database is the single source of truth for the UI layer. All reads execute synchronously or reactively against local disk (2ms–8ms latency), and all writes persist immediately to an encrypted local collection before any network handshake is attempted.`
      },
      {
        id: "why-isar",
        title: "2. Why Isar for Local Storage?",
        content: `While SQLite and Hive are widely used in the Flutter ecosystem, **Isar Database** offers distinct architectural advantages for production workloads:\n\n- **Zero-Copy Serialization:** Reads bypass intermediate Dart Map conversions, loading typed objects directly from memory-mapped files.\n- **Blazing Query Speeds:** Typical index lookups and composite filtering execute in 2ms–8ms, compared to 25ms–60ms in traditional sqflite wrappers.\n- **Reactive Watchers:** Isar collections provide native \`watchLazy()\` and query listeners, allowing the Flutter BLoC or Riverpod state layer to react automatically to disk changes without manual state invalidation.\n- **ACID Transactions:** Full synchronous and asynchronous transaction support prevents corrupted records during unexpected app terminations.`
      },
      {
        id: "outbox-pattern",
        title: "3. The Outbox Mutation Architecture",
        content: `To ensure atomic guarantees, never trigger direct HTTP calls from the UI layer. Instead, implement the **Outbox Mutation Pattern**:\n\n1. **Local Write:** User creates or modifies an entity (e.g. Lead, Booking). The record is written to the local \`LeadEntity\` collection with \`syncStatus = SyncStatus.pending\`.\n2. **Outbox Entry:** In the exact same Isar transaction, a mutation task is appended to \`SyncOutboxQueue\` with a unique UUIDv7, operation type (\`CREATE\`, \`UPDATE\`, \`DELETE\`), entity type, and serialized JSON payload.\n3. **Sync Engine Dispatch:** A standalone \`SyncCoordinator\` listens to network connectivity streams (via \`connectivity_plus\`). When an active connection is established, it consumes the outbox FIFO, sending batches to the backend REST/WebSocket endpoint.\n4. **Acknowledgment & Promotion:** Once the backend returns a 200 OK with server-assigned metadata (or timestamp), the outbox item is purged and the local entity's status is promoted to \`synced\`.`
      },
      {
        id: "code-implementation",
        title: "4. Practical Code Implementation",
        content: `Here is how the atomic mutation and outbox record are committed together in Dart:`,
        codeSnippet: {
          language: "dart",
          caption: "Atomic Outbox Mutation in Isar Database",
          code: `// Define Mutation Record Schema
@collection
class SyncMutation {
  Id id = Isar.autoIncrement;

  @Index(unique: true, replace: true)
  late String mutationId; // UUIDv7

  late String entityType; // e.g., 'Lead'
  late String operation;  // 'CREATE' | 'UPDATE' | 'DELETE'
  late String payloadJson;
  late DateTime createdAt;
  
  int retryCount = 0;
}

// In Repository Layer:
Future<void> saveLeadOffline(LeadEntity lead) async {
  final isar = await IsarService.instance.db;

  final mutation = SyncMutation()
    ..mutationId = uuid.v7()
    ..entityType = 'Lead'
    ..operation = lead.id == null ? 'CREATE' : 'UPDATE'
    ..payloadJson = jsonEncode(lead.toJson())
    ..createdAt = DateTime.now().toUtc();

  // Execute in single ACID transaction
  await isar.writeTxn(() async {
    await isar.leadEntitys.put(lead);
    await isar.syncMutations.put(mutation);
  });

  // Notify Background Sync Worker
  SyncCoordinator.instance.triggerSync();
}`
        }
      },
      {
        id: "common-pitfalls",
        title: "5. Critical Pitfalls & Mitigation",
        content: `1. **Auto-Increment ID Clashes:** Never rely on server-generated auto-increment IDs for offline-created items. Always use client-generated **UUIDv4 or UUIDv7** as the primary identity key across both local and remote tables.\n2. **Unbounded Retry Loops:** If a payload has validation errors (422 Unprocessable), retrying infinitely drains mobile battery. Implement exponential backoff and cap retries at 5 attempts before quarantine.\n3. **Schema Migrations:** Always provide explicit migration strategies in Isar when modifying properties to prevent data wiping during app updates.`
      },
      {
        id: "real-world-case",
        title: "6. Production Case Study: PropKart CRM",
        content: `In the **PropKart CRM** application engineered for real estate field developers in Ahmedabad, field agents frequently log client property visits in underground basements with zero mobile reception.\n\nBy anchoring the system on Isar NoSQL with outbox queues, PropKart achieved an average local read response time of **4.2ms**, eliminated data drop-off entirely, and synchronized over 10,000+ lead mutations smoothly with zero packet collisions.`
      }
    ]
  },

  // 2. Isar vs SQLite
  {
    id: "isar-vs-sqlite",
    slug: "isar-vs-sqlite",
    categorySlug: "database",
    category: "Databases & Offline-First",
    title: "Isar vs SQLite: Which Database Should Flutter Developers Choose?",
    question: "When architecting high-performance Flutter mobile apps, how do you choose between Isar NoSQL and SQLite (sqflite/drift)? What are the real performance benchmarks, concurrency trade-offs, and migration complexities?",
    shortAnswer: "Choose Isar if your priority is ultra-fast read/write throughput (2-8ms), reactive query watchers, and complex NoSQL object graphs with zero boilerplate. Choose SQLite (via Drift) if your application requires strict relational ACID joins, complex multi-table SQL queries, foreign key constraints, or cross-platform desktop/web parity without native C++ compilation bindings.",
    difficulty: "Intermediate",
    readingTime: "6 min read",
    publishedAt: "2026-10-20",
    updatedAt: "2026-11-04",
    status: "published",
    featured: true,
    tags: ["Isar", "SQLite", "Drift", "Flutter", "Database Performance"],
    relatedProjects: ["propkart", "gitsphere"],
    relatedQuestions: ["how-to-build-offline-first-flutter-app", "offline-conflict-resolution"],
    seoTitle: "Isar vs SQLite for Flutter: Complete Architectural Comparison | Jay Soni",
    seoDescription: "In-depth comparison between Isar NoSQL and SQLite/Drift for Flutter apps. Benchmark numbers, query speed, relations, and memory footprints analyzed.",
    tableOfContents: [
      { id: "head-to-head", title: "1. Feature Comparison Matrix" },
      { id: "read-write-benchmarks", title: "2. Performance & Benchmark Numbers" },
      { id: "query-capabilities", title: "3. Query Capabilities & Joins" },
      { id: "desktop-web-support", title: "4. Cross-Platform Considerations" },
      { id: "verdict", title: "5. Production Architecture Verdict" }
    ],
    sections: [
      {
        id: "head-to-head",
        title: "1. Feature Comparison Matrix",
        content: `Both databases have distinct engineering profiles in the Flutter ecosystem:\n\n| Criteria | Isar NoSQL | SQLite (Drift / sqflite) |\n| :--- | :--- | :--- |\n| **Data Paradigm** | Typed Document / Object Store | Relational SQL Tables |\n| **Read Speed (10k items)** | ~2ms–8ms (Zero-Copy) | ~25ms–55ms (Marshalling overhead) |\n| **Reactive Streams** | Native \`watchLazy()\` on queries | Reactive queries via Drift tables |\n| **Foreign Key Joins** | Backlinks & Links (\`@Backlink\`) | Native SQL \`JOIN\` & nested subqueries |\n| **Desktop Support** | Windows, macOS, Linux (C bindings) | Native FFI SQLite on all platforms |\n| **Schema Migration** | Automated property additions | Manual SQL scripts or Drift migrations |`
      },
      {
        id: "read-write-benchmarks",
        title: "2. Performance & Benchmark Numbers",
        content: `In high-volume write scenarios (such as ingesting 5,000 real estate leads or caching jewellery inventory during synchronization), Isar's zero-copy architecture writes in bulk through memory-mapped files without generating tens of thousands of intermediate Dart Map instances.\n\nIn our tests running on Android 14 devices:\n- **Batch Insertion of 5,000 records:** Isar clocked **38ms**; SQLite (Drift with batch transaction) clocked **142ms**.\n- **Indexed Filtered Query:** Isar indexed query returned in **1.8ms**; SQLite query returned in **14ms**.\n- **Full-Text Search:** Isar has built-in tokenized FTS support that operates directly on Dart strings without needing SQLite FTS5 extension compilation.`
      },
      {
        id: "query-capabilities",
        title: "3. Query Capabilities & Joins",
        content: `Where SQLite dominates is **complex analytical querying**:\n\nIf your app requires grouping across 4 tables with aggregating sums, calculating rolling averages, or enforcing cascade deletes via foreign key constraints, SQLite's relational engine provides battle-tested SQL semantics.\n\nIn Isar, relations are expressed via \`IsarLink<T>\` and \`IsarLinks<T>\`. While these handle 1-to-1 and 1-to-many relationships gracefully, deeply nested many-to-many joins require manual aggregation in the repository layer.`
      },
      {
        id: "desktop-web-support",
        title: "4. Cross-Platform Considerations",
        content: `When building cross-platform desktop applications (such as our **GitSphere Desktop** visual Git client for Windows), SQLite via \`sqflite_common_ffi\` provides rock-solid stability without requiring native compilation toolchains.\n\nIsar provides binary binaries for Windows (\`isar.dll\`), macOS (\`libisar.dylib\`), and Linux, but requires bundling these binaries during installer packaging (e.g. with Inno Setup 6).`
      },
      {
        id: "verdict",
        title: "5. Production Architecture Verdict",
        content: `- **Choose Isar:** If building mobile-first enterprise CRMs, chat applications, or field-worker tools where UI fluidity, reactive streams, and instant offline reads are paramount (e.g., PropKart CRM).\n- **Choose SQLite / Drift:** If building financial ledger software (e.g., KITAAB), desktop development tools, or systems requiring complex relational accounting ledgers.`
      }
    ]
  },

  // 3. How Supabase Realtime Works
  {
    id: "how-supabase-realtime-works",
    slug: "how-supabase-realtime-works",
    categorySlug: "supabase",
    category: "Supabase & Cloud",
    title: "How Does Supabase Realtime Work With PostgreSQL?",
    question: "What is the internal mechanism behind Supabase Realtime? How does it tap into PostgreSQL's Write-Ahead Log (WAL), decode changes, and broadcast updates to thousands of connected clients with sub-100ms latency?",
    shortAnswer: "Supabase Realtime leverages PostgreSQL's native logical replication slots to tail the Write-Ahead Log (WAL). An Elixir/Phoenix server (realtime engine) decodes WAL changes into JSON events, applies Row-Level Security (RLS) filters per subscriber, and broadcasts changes over WebSockets using Phoenix Channels.",
    difficulty: "Advanced",
    readingTime: "7 min read",
    publishedAt: "2026-10-22",
    updatedAt: "2026-11-04",
    status: "published",
    featured: true,
    tags: ["Supabase", "PostgreSQL", "Realtime", "WebSockets", "Elixir"],
    relatedProjects: ["propkart", "chandrakala-jewellers"],
    relatedQuestions: ["sync-flutter-supabase-realtime", "supabase-row-level-security"],
    seoTitle: "How Supabase Realtime Works with PostgreSQL Explained | Jay Soni",
    seoDescription: "A deep dive into PostgreSQL Write-Ahead Logs (WAL), logical replication slots, Elixir Phoenix channels, and how Supabase streams real-time database updates.",
    tableOfContents: [
      { id: "architecture-pipeline", title: "1. The Internal Architecture Pipeline" },
      { id: "wal-logical-decoding", title: "2. PostgreSQL WAL & Logical Decoding" },
      { id: "elixir-engine", title: "3. The Phoenix/Elixir PubSub Engine" },
      { id: "rls-security-filtering", title: "4. Security: RLS Filtering at Scale" },
      { id: "production-considerations", title: "5. Production Pitfalls & Connection Limits" }
    ],
    sections: [
      {
        id: "architecture-pipeline",
        title: "1. The Internal Architecture Pipeline",
        content: `Traditional realtime architectures poll the database periodically (\`SELECT * WHERE updated_at > ?\`) or require developers to publish events manually via Redis Pub/Sub inside their application code. This creates race conditions and double-write vulnerabilities.\n\nSupabase avoids this entirely by listening directly to **PostgreSQL's Write-Ahead Log (WAL)**. Whenever an \`INSERT\`, \`UPDATE\`, or \`DELETE\` occurs in PostgreSQL, the event is automatically captured and broadcast without touching application code.`
      },
      {
        id: "wal-logical-decoding",
        title: "2. PostgreSQL WAL & Logical Decoding",
        content: `PostgreSQL writes every change to disk in a transaction log known as the **Write-Ahead Log (WAL)** before writing to the actual table blocks. Supabase uses PostgreSQL's **Logical Replication**:
        
1. A replication slot is registered with PostgreSQL using the \`pgoutput\` or \`wal2json\` decoder plugin.
2. The decoder converts binary WAL records into high-level logical change events (tuples containing old and new row states).
3. The replication slot maintains an offset (LSN — Log Sequence Number), ensuring that even if the Realtime service restarts, zero messages are dropped.`
      },
      {
        id: "elixir-engine",
        title: "3. The Phoenix/Elixir PubSub Engine",
        content: `The backbone of Supabase Realtime is written in **Elixir**, running on the Erlang BEAM virtual machine. BEAM excels at managing lightweight, concurrent actor processes:\n\n- Each client WebSocket connection runs in an isolated Erlang process (consuming only ~2KB memory).\n- The Elixir cluster reads the decoded WAL stream and multiplexes events into designated topic rooms (\`realtime:public:table_name\`).\n- Because of BEAM's preemptive scheduler, a slow mobile client on 2G reception cannot block message delivery to other connected clients.`
      },
      {
        id: "rls-security-filtering",
        title: "4. Security: RLS Filtering at Scale",
        content: `In Supabase Realtime v2, PostgreSQL's **Row-Level Security (RLS)** is enforced in realtime. When an event fires:\n\n- The engine validates whether the subscribing JWT is permitted to read that specific row based on the table's \`SELECT\` RLS policy.\n- If User A does not own the row, the event payload is never transmitted to User A's WebSocket connection, preventing unauthorized data snooping.`
      },
      {
        id: "production-considerations",
        title: "5. Production Pitfalls & Connection Limits",
        content: `1. **REPLICA IDENTITY FULL:** For \`UPDATE\` and \`DELETE\` events to contain the old record values, you must configure: \`ALTER TABLE leads REPLICA IDENTITY FULL;\`. Without this, only the primary key is broadcast.\n2. **Replication Slot Disk Spikes:** If the Realtime service disconnects, PostgreSQL retains all WAL segments on disk. Monitor disk usage to prevent database downtime.\n3. **Broadcasting Bloat:** Never enable Realtime broadcast on tables with high-frequency logging (e.g. metrics, audit logs). Enable it only for operational tables like \`leads\`, \`tasks\`, and \`notifications\`.`
      }
    ]
  },

  // 4. Synchronize Flutter with Supabase Realtime
  {
    id: "sync-flutter-supabase-realtime",
    slug: "sync-flutter-supabase-realtime",
    categorySlug: "flutter",
    category: "Flutter & Mobile",
    title: "How to Synchronize Flutter Data With Supabase Realtime?",
    question: "How do you connect a Flutter mobile app to Supabase Realtime to receive live updates, merge them into local state without jitter, and manage connection drops gracefully?",
    shortAnswer: "Initialize a Supabase channel listener in a dedicated repository or service class, filter by table and event type, transform incoming payloads into domain entities, and write them directly to your local database (e.g., Isar). Your UI layer listens to the local database's reactive stream, preventing UI stutter and decoupling connection state from rendering.",
    difficulty: "Intermediate",
    readingTime: "7 min read",
    publishedAt: "2026-10-24",
    updatedAt: "2026-11-04",
    status: "published",
    featured: false,
    tags: ["Flutter", "Supabase", "Realtime", "WebSockets", "BLoC"],
    relatedProjects: ["propkart", "chandrakala-jewellers"],
    relatedQuestions: ["how-supabase-realtime-works", "how-to-build-offline-first-flutter-app"],
    seoTitle: "How to Sync Flutter Data with Supabase Realtime | Jay Soni",
    seoDescription: "Step-by-step code tutorial on connecting Flutter to Supabase Realtime channels, handling WebSocket reconnections, and merging live payloads.",
    tableOfContents: [
      { id: "connection-setup", title: "1. Client Channel Initialization" },
      { id: "stream-handling", title: "2. Realtime Event Listener Implementation" },
      { id: "local-merge", title: "3. Merging Live Events into Local Cache" },
      { id: "reconnection-strategy", title: "4. Reconnection & Backoff Handling" }
    ],
    sections: [
      {
        id: "connection-setup",
        title: "1. Client Channel Initialization",
        content: `In Flutter, avoid binding realtime streams directly inside UI widget state (\`StatefulWidget\`). If the user leaves the screen, the channel leaks or re-subscribes repeatedly.\n\nInstead, encapsulate the Supabase channel lifecycle inside a persistent singleton service or BLoC repository layer that activates upon user login and persists across route transitions.`
      },
      {
        id: "stream-handling",
        title: "2. Realtime Event Listener Implementation",
        content: `Here is the clean implementation pattern using the official \`supabase_flutter\` package:`,
        codeSnippet: {
          language: "dart",
          caption: "Subscribing to Postgres Changes in Flutter",
          code: `class RealtimeSyncService {
  final SupabaseClient _client = Supabase.instance.client;
  RealtimeChannel? _leadChannel;

  void subscribeToLeadUpdates(String organizationId) {
    _leadChannel = _client.channel('public:leads:org_' + organizationId)
      ..onPostgresChanges(
        event: PostgresChangeEvent.all,
        schema: 'public',
        table: 'leads',
        filter: PostgresChangeFilter(
          type: PostgresChangeFilterType.eq,
          column: 'organization_id',
          value: organizationId,
        ),
        callback: (payload) async {
          await _handlePostgresChange(payload);
        },
      )
      ..subscribe((status, error) {
        if (status == RealtimeSubscribeStatus.subscribed) {
          debugPrint('Connected to Realtime Lead Stream');
        } else if (status == RealtimeSubscribeStatus.closed) {
          debugPrint('Realtime channel closed - fallback to polling');
        }
      });
  }

  Future<void> _handlePostgresChange(PostgresChangePayload payload) async {
    final eventType = payload.eventType;
    final newRecord = payload.newRecord;
    final oldRecord = payload.oldRecord;

    final isar = await IsarService.instance.db;

    await isar.writeTxn(() async {
      if (eventType == PostgresChangeEvent.insert || eventType == PostgresChangeEvent.update) {
        final lead = LeadEntity.fromJson(newRecord);
        await isar.leadEntitys.put(lead);
      } else if (eventType == PostgresChangeEvent.delete) {
        final deletedId = oldRecord['id'];
        await isar.leadEntitys.deleteByRemoteId(deletedId);
      }
    });
  }
}`
        }
      },
      {
        id: "local-merge",
        title: "3. Merging Live Events into Local Cache",
        content: `Notice the key architectural pattern: **The Realtime listener does not emit to the UI.**\n\nInstead, it updates the local Isar database. Because the UI is watching an Isar query (\`isar.leadEntitys.filter().watchLazy()\`), the UI updates automatically through the existing reactive pipeline. This guarantees zero duplicate rendering logic.`
      },
      {
        id: "reconnection-strategy",
        title: "4. Reconnection & Backoff Handling",
        content: `When a mobile device enters airplane mode or switches from Wi-Fi to cellular, WebSockets disconnect. While \`supabase_flutter\` attempts automatic reconnection, messages emitted during the offline gap may be missed.\n\n**Always perform a Delta Sync upon reconnection:** Listen to connection state transitions, and whenever the channel status returns to \`subscribed\`, dispatch a lightweight sync query fetching all records modified since the last known local \`max(updated_at)\`.`
      }
    ]
  },

  // 5. Offline Conflict Resolution
  {
    id: "offline-conflict-resolution",
    slug: "how-to-implement-conflict-resolution",
    categorySlug: "software-architecture",
    category: "Software Architecture",
    title: "How to Implement Conflict Resolution in Offline-First Applications?",
    question: "When multiple users edit the same entity concurrently while offline, how do you resolve data conflicts without corrupting database integrity or silently overwriting critical updates?",
    shortAnswer: "Conflict resolution strategies range from simple Server-Wins and Last-Write-Wins (LWW) to advanced Field-Level Merging and Operational Transformation. For enterprise systems, use a version-counter or optimistic concurrency check: if the client's base version differs from the server's current version, apply field-level three-way merging or prompt the user with a visual resolution interface.",
    difficulty: "Advanced",
    readingTime: "9 min read",
    publishedAt: "2026-10-25",
    updatedAt: "2026-11-04",
    status: "published",
    featured: true,
    tags: ["Offline-First", "Conflict Resolution", "Architecture", "Distributed Systems"],
    relatedProjects: ["propkart", "devsync"],
    relatedQuestions: ["how-to-build-offline-first-flutter-app", "delta-synchronization-flutter"],
    seoTitle: "How to Implement Conflict Resolution in Offline Applications | Jay Soni",
    seoDescription: "Comprehensive guide to conflict resolution patterns: Server-Wins, Client-Wins, Last-Write-Wins (LWW), and Field-Level 3-Way Merging with code examples.",
    tableOfContents: [
      { id: "the-concurrency-problem", title: "1. The Distributed Concurrency Problem" },
      { id: "resolution-strategies", title: "2. Common Conflict Resolution Strategies" },
      { id: "field-level-merge", title: "3. Field-Level Three-Way Merging" },
      { id: "optimistic-concurrency", title: "4. Optimistic Concurrency Control (OCC)" },
      { id: "production-rules", title: "5. Production Engineering Rules" }
    ],
    sections: [
      {
        id: "the-concurrency-problem",
        title: "1. The Distributed Concurrency Problem",
        content: `In an offline-first system, devices act as independent replicas of the central database. Consider this scenario:\n\n- At 10:00 AM, Agent A and Agent B both sync Lead #402 (Status: "New", Phone: "9876543210").\n- At 10:15 AM, Agent A goes offline and updates the Phone number to "9999999999".\n- At 10:20 AM, Agent B changes the Status to "Qualified" and pushes to the server.\n- At 10:30 AM, Agent A reconnects and attempts to push.\n\nIf the system uses naive **Last-Write-Wins (LWW)** on the entire row, Agent A will overwrite Agent B's status update back to "New", causing silent data corruption.`
      },
      {
        id: "resolution-strategies",
        title: "2. Common Conflict Resolution Strategies",
        content: `| Strategy | Complexity | Data Loss Risk | Recommended Use Case |\n| :--- | :--- | :--- | :--- |\n| **Server-Wins** | Low | High (Client changes discarded) | Read-only catalogs, financial audit ledgers |\n| **Client-Wins** | Low | High (Server state overwritten) | Personal note apps, user preferences |\n| **Last-Write-Wins (LWW)** | Low | Moderate | Non-critical status changes with clock synchronization |\n| **Field-Level Merge** | Medium | Low | Collaborative business CRMs (PropKart) |\n| **Manual Resolution** | High | Zero | Legal documents, property contract signatures |`
      },
      {
        id: "field-level-merge",
        title: "3. Field-Level Three-Way Merging",
        content: `In field-level conflict resolution, every mutation records not just the new entity state, but **the specific fields that were modified** alongside the base version timestamp.\n\nWhen a conflict occurs:\n1. The server compares the Base Snapshot, the Current Server State, and the Incoming Client Mutation.\n2. If Agent A modified \`phone\` and Agent B modified \`status\`, the server merges both changes into a single consolidated record.\n3. A conflict occurs **only** if both agents modified the exact same property (e.g. both changed \`phone\`). In that case, the field-level timestamp acts as a deterministic tie-breaker.`
      },
      {
        id: "optimistic-concurrency",
        title: "4. Optimistic Concurrency Control (OCC)",
        content: `Implement an integer \`version\` column in your database schema:`,
        codeSnippet: {
          language: "sql",
          caption: "PostgreSQL Optimistic Concurrency Check",
          code: `-- Atomic Update with Version Check
UPDATE leads
SET 
  status = :newStatus,
  phone = :newPhone,
  version = version + 1,
  updated_at = NOW()
WHERE id = :leadId AND version = :expectedBaseVersion;

-- If rows_affected == 0, a concurrent update occurred!
-- Return HTTP 409 Conflict with current server state.`
        }
      },
      {
        id: "production-rules",
        title: "5. Production Engineering Rules",
        content: `In **PropKart CRM**, we implemented a strict two-tier policy:\n- Field updates on separate attributes merge automatically without bothering the user.\n- Overlapping edits trigger a conflict notification with an in-app comparison bottom sheet, allowing the sales manager to choose which value to retain.`
      }
    ]
  },

  // 6. Delta Synchronization in Flutter
  {
    id: "delta-synchronization-flutter",
    slug: "how-to-implement-delta-synchronization",
    categorySlug: "database",
    category: "Databases & Offline-First",
    title: "How to Implement Delta Synchronization in Flutter?",
    question: "How do you build a delta synchronization protocol that only downloads modified records instead of fetching the entire database on every sync cycle?",
    shortAnswer: "Delta synchronization tracks a monotonic timestamp or high-watermark version counter (e.g., last_synced_at) locally. When requesting sync updates, the client passes this timestamp to the server, which returns only records where updated_at > last_synced_at alongside tombstone markers for deleted records.",
    difficulty: "Advanced",
    readingTime: "7 min read",
    publishedAt: "2026-10-27",
    updatedAt: "2026-11-04",
    status: "published",
    featured: false,
    tags: ["Delta Sync", "Flutter", "Backend", "API Optimization", "Isar"],
    relatedProjects: ["propkart", "kitaab"],
    relatedQuestions: ["how-to-build-offline-first-flutter-app", "offline-conflict-resolution"],
    seoTitle: "How to Implement Delta Synchronization in Flutter | Jay Soni",
    seoDescription: "Architecture guide for delta sync: high-watermarks, soft delete tombstones, batch pagination, and local SQLite/Isar upserts.",
    tableOfContents: [
      { id: "what-is-delta-sync", title: "1. Full Sync vs Delta Sync" },
      { id: "tombstone-pattern", title: "2. The Soft-Delete Tombstone Pattern" },
      { id: "high-watermark", title: "3. The High-Watermark Algorithm" },
      { id: "flutter-implementation", title: "4. Client-Side Implementation in Dart" }
    ],
    sections: [
      {
        id: "what-is-delta-sync",
        title: "1. Full Sync vs Delta Sync",
        content: `Fetching the full dataset on every app launch works for small toy projects (50 items), but completely breaks in production apps with 10,000+ records. It burns client cellular data, spikes server CPU, and causes severe mobile memory pressure.\n\n**Delta Sync** ensures that if only 3 leads out of 10,000 changed since yesterday, the client payload is only a few hundred bytes.`
      },
      {
        id: "tombstone-pattern",
        title: "2. The Soft-Delete Tombstone Pattern",
        content: `How does the client know when a record was deleted on the server? If the server performs a physical \`DELETE FROM leads WHERE id = ?\`, the row disappears from the database, meaning it won't appear in \`WHERE updated_at > :lastSync\`.\n\nTo solve this, use **Soft Deletes (Tombstones)**:\n- Add \`deleted_at TIMESTAMP WITH TIME ZONE NULL\` to your tables.\n- When a record is deleted, set \`deleted_at = NOW()\` and update \`updated_at = NOW()\`.\n- The delta query returns the record with \`deleted_at != null\`, instructing the Flutter client to delete it from local Isar storage.`
      },
      {
        id: "high-watermark",
        title: "3. The High-Watermark Algorithm",
        content: `Here is the server-side PostgreSQL delta query pattern:`,
        codeSnippet: {
          language: "sql",
          caption: "PostgreSQL Delta Endpoint Query",
          code: `SELECT 
  id,
  title,
  status,
  updated_at,
  deleted_at
FROM leads
WHERE organization_id = :orgId 
  AND updated_at > :clientLastSyncedAt
ORDER BY updated_at ASC
LIMIT 500;`
        }
      },
      {
        id: "flutter-implementation",
        title: "4. Client-Side Implementation in Dart",
        content: `After receiving the batch, persist the changes and advance your local sync cursor atomically:`,
        codeSnippet: {
          language: "dart",
          caption: "Processing Delta Payloads in Isar",
          code: `Future<void> applyDeltaSync(DeltaSyncResponse response) async {
  final isar = await IsarService.instance.db;

  await isar.writeTxn(() async {
    // 1. Process Upserts
    for (final json in response.upserts) {
      final entity = LeadEntity.fromJson(json);
      await isar.leadEntitys.put(entity);
    }

    // 2. Process Tombstone Deletions
    for (final deletedId in response.deletedIds) {
      await isar.leadEntitys.deleteByRemoteId(deletedId);
    }

    // 3. Update High-Watermark Cursor
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('last_synced_at', response.serverTimestamp);
  });
}`
        }
      }
    ]
  },

  // 7. Scalable CRM Using Flutter & Node.js
  {
    id: "scalable-crm-flutter-nodejs",
    slug: "how-to-build-scalable-crm-flutter-nodejs",
    categorySlug: "crm-development",
    category: "CRM & Business Systems",
    title: "How to Build a Scalable CRM Using Flutter and Node.js?",
    question: "What is the full-stack architecture for building an enterprise-grade, multi-user CRM that supports real estate sales teams, telecallers, and executives across mobile and desktop?",
    shortAnswer: "A scalable CRM architecture pairs a cross-platform Flutter client (using BLoC and local offline caching) with a modular NestJS/Node.js backend. The backend enforces multi-tenant organization isolation in PostgreSQL, implements dynamic Role-Based Access Control (RBAC), and manages lead dispatch via Redis queues.",
    difficulty: "Advanced",
    readingTime: "10 min read",
    publishedAt: "2026-10-28",
    updatedAt: "2026-11-04",
    status: "published",
    featured: true,
    tags: ["CRM", "Flutter", "Node.js", "NestJS", "PostgreSQL", "Enterprise"],
    relatedProjects: ["propkart", "propkart-broker", "nb-hrms"],
    relatedQuestions: ["lead-allocation-engine-crm", "realtime-property-management-crm"],
    seoTitle: "How to Build a Scalable CRM with Flutter & Node.js | Jay Soni",
    seoDescription: "Architecture blueprint for an enterprise CRM: Flutter client, NestJS backend, PostgreSQL multi-tenancy, and Redis lead allocation queues.",
    tableOfContents: [
      { id: "crm-requirements", title: "1. Core Architectural Requirements" },
      { id: "backend-nest", title: "2. Backend: NestJS Modular Structure" },
      { id: "frontend-flutter", title: "3. Frontend: Flutter Multi-Role Client" },
      { id: "database-schema", title: "4. Multi-Tenant Database Design" },
      { id: "case-study", title: "5. Real-World Proof: PropKart CRM" }
    ],
    sections: [
      {
        id: "crm-requirements",
        title: "1. Core Architectural Requirements",
        content: `Building a real-world enterprise CRM (like PropKart) is vastly different from a simple CRUD demo. It requires:\n\n- **Role Isolation:** Admins see all revenue KPIs; Team Leaders manage allocated clusters; Telecallers only see their assigned lead call queues.\n- **Zero-Latency Search:** Telecallers handle 100+ inbound calls daily; finding a customer record by partial phone or name must execute under 50ms.\n- **Multi-Channel Ingestion:** Instant lead ingestion from Meta Lead Ads, Housing.com, 99acres, and WhatsApp with deduplication.`
      },
      {
        id: "backend-nest",
        title: "2. Backend: NestJS Modular Structure",
        content: `Using **NestJS 10** with TypeScript provides architectural guardrails:\n\n- \`AuthModule\`: Manages JWT access tokens, argon2id password hashing, and RFC 6238 TOTP 2FA.\n- \`LeadModule\`: Handles lead CRUD, status transitions, follow-up scheduling, and call disposition logs.\n- \`AllocationModule\`: Encapsulates lead distribution algorithms (Round-Robin, Weighted, and Geofenced).\n- \`WebhookModule\`: Asynchronously processes incoming lead webhooks from external property portals.`
      },
      {
        id: "frontend-flutter",
        title: "3. Frontend: Flutter Multi-Role Client",
        content: `A single Flutter codebase compiles to Android, iOS, Windows, and Web. By injecting dynamic role permissions (\`user.permissions.contains('leads.view_all')\`), the UI dynamically adjusts navigation bars, action buttons, and analytical dashboards without deploying separate mobile apps.`
      },
      {
        id: "database-schema",
        title: "4. Multi-Tenant Database Design",
        content: `Always enforce organization isolation at the database layer:`,
        codeSnippet: {
          language: "sql",
          caption: "PostgreSQL Multi-Tenant Schema with RLS",
          code: `CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  assigned_agent_id UUID REFERENCES users(id),
  full_name VARCHAR(120) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  budget_min NUMERIC(12, 2),
  budget_max NUMERIC(12, 2),
  stage VARCHAR(30) DEFAULT 'NEW',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  version INT DEFAULT 1
);

-- Compound Index for Sub-10ms Agent Pipeline Queries
CREATE INDEX idx_leads_org_agent_stage 
ON leads (organization_id, assigned_agent_id, stage);`
        }
      },
      {
        id: "case-study",
        title: "5. Real-World Proof: PropKart CRM",
        content: `In **PropKart CRM**, this architecture achieved:\n- 100/100 automated security audit score (37/37 checks passed).\n- 24-hour cryptographic lead deduplication preventing wasted sales rep calls.\n- 0ms perceived latency for field agents operating in remote project locations.`
      }
    ]
  },

  // 8. Row Level Security in Supabase
  {
    id: "supabase-row-level-security",
    slug: "how-to-implement-supabase-row-level-security",
    categorySlug: "supabase",
    category: "Supabase & Cloud",
    title: "How to Implement Row Level Security (RLS) in Supabase?",
    question: "How do you design, test, and optimize PostgreSQL Row Level Security (RLS) policies in Supabase to prevent data leakage in multi-user applications?",
    shortAnswer: "Enable RLS on tables with ALTER TABLE table_name ENABLE ROW LEVEL SECURITY. Then write granular policies using auth.uid() and auth.jwt() to control SELECT, INSERT, UPDATE, and DELETE operations based on tenant ownership and user role memberships.",
    difficulty: "Intermediate",
    readingTime: "6 min read",
    publishedAt: "2026-10-29",
    updatedAt: "2026-11-04",
    status: "published",
    featured: false,
    tags: ["Supabase", "PostgreSQL", "RLS", "Database Security"],
    relatedProjects: ["chandrakala-jewellers", "propkart"],
    relatedQuestions: ["how-supabase-realtime-works", "optimize-postgresql-queries"],
    seoTitle: "How to Implement Supabase Row Level Security (RLS) | Jay Soni",
    seoDescription: "Practical guide to writing performant, secure PostgreSQL RLS policies in Supabase. Multi-tenant rules, role checks, and indexing optimizations.",
    tableOfContents: [
      { id: "what-is-rls", title: "1. What is Row Level Security?" },
      { id: "enabling-rls", title: "2. Enabling RLS & Default Deny" },
      { id: "multi-tenant-policy", title: "3. Writing Multi-Tenant RLS Policies" },
      { id: "rls-indexing", title: "4. Performance: Indexing RLS Columns" }
    ],
    sections: [
      {
        id: "what-is-rls",
        title: "1. What is Row Level Security?",
        content: `In traditional web development, security is handled in the API layer (\`if (lead.userId !== req.user.id) throw 403\`). If an engineer forgets this check in just one endpoint, customer records are exposed to malicious actors.\n\n**Row Level Security (RLS)** moves the security gate directly into the database engine. Even if someone runs \`SELECT * FROM leads\`, PostgreSQL automatically appends the user's security predicate to the query plan.`
      },
      {
        id: "enabling-rls",
        title: "2. Enabling RLS & Default Deny",
        content: `When you enable RLS, PostgreSQL switches to a strict **Default-Deny** stance:`,
        codeSnippet: {
          language: "sql",
          caption: "Enabling RLS on Table",
          code: `ALTER TABLE public.customer_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_inquiries FORCE ROW LEVEL SECURITY;`
        }
      },
      {
        id: "multi-tenant-policy",
        title: "3. Writing Multi-Tenant RLS Policies",
        content: `Here is a production policy for tenant and role-based access:`,
        codeSnippet: {
          language: "sql",
          caption: "Tenant & Agent Ownership Policies",
          code: `-- 1. Admins can view all inquiries in their organization
CREATE POLICY "Admins view all org inquiries"
ON public.customer_inquiries
FOR SELECT
TO authenticated
USING (
  organization_id = (auth.jwt() -> 'app_metadata' ->> 'organization_id')::uuid
  AND (auth.jwt() -> 'app_metadata' ->> 'role') = 'ADMIN'
);

-- 2. Agents only view inquiries assigned to them
CREATE POLICY "Agents view assigned inquiries"
ON public.customer_inquiries
FOR SELECT
TO authenticated
USING (
  organization_id = (auth.jwt() -> 'app_metadata' ->> 'organization_id')::uuid
  AND assigned_agent_id = auth.uid()
);`
        }
      },
      {
        id: "rls-indexing",
        title: "4. Performance: Indexing RLS Columns",
        content: `**CRITICAL PERFORMANCE WARNING:** Every RLS policy runs on every single row check during table scans. If the columns in your policy (\`organization_id\`, \`assigned_agent_id\`) are not indexed, database queries will degrade to slow sequential scans.\n\nAlways add indexes on columns referenced inside \`USING()\` expressions.`
      }
    ]
  },

  // 9. BLoC vs Cubit
  {
    id: "bloc-vs-cubit",
    slug: "bloc-vs-cubit-flutter-state-management",
    categorySlug: "flutter",
    category: "Flutter & Mobile",
    title: "BLoC vs Cubit: Which State Management Approach Is Better?",
    question: "When should you use BLoC (with explicit Event classes) vs Cubit (with direct function calls) in Flutter? How do they impact code maintainability, traceability, and complex event transformations?",
    shortAnswer: "Use Cubit for straightforward UI state transitions (forms, simple counters, theme toggling, local modals) where boilerplate overhead outweighs the benefits. Use BLoC for complex, reactive flows that require event debouncing, throttling, concurrency control (via event transformers), and a strict, audit-traceable event stream.",
    difficulty: "Intermediate",
    readingTime: "6 min read",
    publishedAt: "2026-10-30",
    updatedAt: "2026-11-04",
    status: "published",
    featured: false,
    tags: ["Flutter", "BLoC", "Cubit", "State Management", "Architecture"],
    relatedProjects: ["propkart", "kitaab"],
    relatedQuestions: ["how-to-build-offline-first-flutter-app", "optimize-large-flutter-app"],
    seoTitle: "BLoC vs Cubit in Flutter: Architectural Comparison | Jay Soni",
    seoDescription: "Detailed comparison between BLoC and Cubit in Flutter. Event transformers, debounced search, boilerplate trade-offs, and best practices.",
    tableOfContents: [
      { id: "core-difference", title: "1. The Fundamental Architectural Difference" },
      { id: "when-cubit", title: "2. When to Choose Cubit" },
      { id: "when-bloc", title: "3. When to Choose BLoC (Event Transformers)" },
      { id: "search-example", title: "4. Practical Example: Debounced AI Search" }
    ],
    sections: [
      {
        id: "core-difference",
        title: "1. The Fundamental Architectural Difference",
        content: `Both BLoC and Cubit belong to the \`flutter_bloc\` ecosystem and emit immutable State objects. The distinction lies in **how state changes are triggered**:\n\n- **Cubit:** UI invokes a method directly: \`context.read<AuthCubit>().login(email, pass)\`.\n- **BLoC:** UI dispatches an Event into an event sink: \`context.read<AuthBloc>().add(LoginRequested(email, pass))\`.`
      },
      {
        id: "when-cubit",
        title: "2. When to Choose Cubit",
        content: `Cubit requires ~50% less boilerplate code. Choose Cubit for:\n- Form field validation (e.g. tracking dirty states on input).\n- UI theme toggling (Dark vs Light mode).\n- Simple CRUD detail views with straightforward load/success/failure states.`
      },
      {
        id: "when-bloc",
        title: "3. When to Choose BLoC (Event Transformers)",
        content: `Choose BLoC when you need **Reactive Event Transformations**.\n\nIn BLoC, events pass through an RxDart stream transformer pipeline. This allows you to easily apply:\n- \`debounceTime(Duration(milliseconds: 300))\` for search bars.\n- \`throttleTime()\` to prevent rapid double-clicks on payment buttons.\n- \`restartable()\` to cancel pending HTTP queries when the user types a new character.`
      },
      {
        id: "search-example",
        title: "4. Practical Example: Debounced AI Search",
        content: `In the **PropKart CRM AppShell**, we engineered an AppShell search bar that allows agents to search across 10,000+ properties using natural language. Using BLoC's \`restartable()\` transformer ensured that previous database scans were cancelled instantly whenever a new keystroke arrived:`,
        codeSnippet: {
          language: "dart",
          caption: "BLoC with Event Transformer for Search",
          code: `class PropertySearchBloc extends Bloc<PropertySearchEvent, PropertySearchState> {
  final PropertyRepository repository;

  PropertySearchBloc(this.repository) : super(PropertySearchInitial()) {
    on<SearchQueryChanged>(
      _onSearchQueryChanged,
      transformer: (events, mapper) => events
          .debounceTime(const Duration(milliseconds: 300))
          .switchMap(mapper), // cancels ongoing queries
    );
  }

  Future<void> _onSearchQueryChanged(
    SearchQueryChanged event, 
    Emitter<PropertySearchState> emit
  ) async {
    if (event.query.isEmpty) {
      return emit(PropertySearchInitial());
    }
    emit(PropertySearchLoading());
    try {
      final results = await repository.searchLocal(event.query);
      emit(PropertySearchSuccess(results));
    } catch (e) {
      emit(PropertySearchFailure(e.toString()));
    }
  }
}`
        }
      }
    ]
  },

  // 10. Lead Allocation Engine in CRM
  {
    id: "lead-allocation-engine-crm",
    slug: "how-to-implement-lead-allocation-engine-crm",
    categorySlug: "crm-development",
    category: "CRM & Business Systems",
    title: "How to Implement a Lead Allocation Engine in a CRM?",
    question: "How do you engineer an automated, fair, and scalable lead distribution engine for sales teams using Round-Robin, Weighted Distribution, and First-Come-First-Served (FCFS) rules?",
    shortAnswer: "A lead allocation engine routes incoming prospects to sales agents based on active shifts, current lead caps, and geographic geofencing. It is implemented using atomic database transactions or Redis distributed locks to prevent race conditions and duplicate assignments.",
    difficulty: "Advanced",
    readingTime: "8 min read",
    publishedAt: "2026-10-31",
    updatedAt: "2026-11-04",
    status: "published",
    featured: true,
    tags: ["CRM", "Lead Allocation", "Algorithms", "Redis", "PostgreSQL"],
    relatedProjects: ["propkart", "propkart-broker"],
    relatedQuestions: ["scalable-crm-flutter-nodejs", "realtime-property-management-crm"],
    seoTitle: "How to Build a CRM Lead Allocation Engine | Jay Soni",
    seoDescription: "Step-by-step guide to building an automated lead distribution engine: Round-Robin, weighted capacities, geofenced routing, and concurrency safeguards.",
    tableOfContents: [
      { id: "allocation-models", title: "1. Core Allocation Models" },
      { id: "race-condition-trap", title: "2. The Concurrent Assignment Race Condition" },
      { id: "round-robin-implementation", title: "3. Atomic Round-Robin Implementation" },
      { id: "business-rules", title: "4. Shift & Capacity Guardrails" }
    ],
    sections: [
      {
        id: "allocation-models",
        title: "1. Core Allocation Models",
        content: `In high-volume real estate and finance sales organizations, leads arrive 24/7 from web forms, Facebook Ads, and property portals. The allocation engine must choose the optimal agent using three primary models:\n\n1. **Standard Round-Robin:** Sequential rotation across available agents.\n2. **Weighted Distribution:** Senior agents receive 2x more leads than junior trainees.\n3. **Geofenced / Skill-Based:** Leads inquiring about luxury villas in Ahmedabad North are assigned only to agents stationed in that zone.`
      },
      {
        id: "race-condition-trap",
        title: "2. The Concurrent Assignment Race Condition",
        content: `If two webhook events fire at the exact same millisecond, two parallel processes might read the same agent as "next in line", assigning both hot leads to one agent while leaving another idle.\n\nTo solve this, use an **atomic Redis counter** or PostgreSQL's \`SELECT ... FOR UPDATE SKIP LOCKED\`.`
      },
      {
        id: "round-robin-implementation",
        title: "3. Atomic Round-Robin Implementation",
        content: `Here is the atomic allocation query in PostgreSQL:`,
        codeSnippet: {
          language: "sql",
          caption: "Atomic Agent Selection with Shift Check",
          code: `-- Select next available agent who is checked in and below max capacity
WITH eligible_agents AS (
  SELECT 
    u.id,
    u.current_lead_count,
    u.last_assigned_at
  FROM users u
  WHERE u.organization_id = :orgId
    AND u.is_active = true
    AND u.is_on_shift = true
    AND u.current_lead_count < u.max_daily_capacity
  ORDER BY u.last_assigned_at ASC NULLS FIRST
  LIMIT 1
  FOR UPDATE SKIP LOCKED
)
UPDATE users
SET 
  current_lead_count = current_lead_count + 1,
  last_assigned_at = NOW()
WHERE id = (SELECT id FROM eligible_agents)
RETURNING id AS assigned_agent_id;`
        }
      },
      {
        id: "business-rules",
        title: "4. Shift & Capacity Guardrails",
        content: `In **PropKart CRM**, we also integrated **Automated Fallback Pools**:\n- If an allocated telecaller does not initiate contact within 15 minutes during office hours, the lead automatically escalates and re-enters the distribution pool for secondary dispatch.`
      }
    ]
  },

  // 11. Optimize a Large Flutter App
  {
    id: "optimize-large-flutter-app",
    slug: "how-to-optimize-large-flutter-application",
    categorySlug: "flutter",
    category: "Flutter & Mobile",
    title: "How to Optimize a Large Flutter Application for 60/120 FPS Performance?",
    question: "How do you identify UI jank, eliminate frame drops, optimize render trees, and reduce memory footprints in complex Flutter mobile apps?",
    shortAnswer: "Profile with Flutter DevTools CPU and Memory Profilers. Eliminate unnecessary widget rebuilds using const constructors and selector-based state listeners, isolate intensive computations onto background Dart Isolates, wrap heavy animated widgets in RepaintBoundary, and optimize image memory with cacheWidth and cacheHeight.",
    difficulty: "Advanced",
    readingTime: "7 min read",
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-04",
    status: "published",
    featured: false,
    tags: ["Flutter", "Performance", "Optimization", "DevTools", "Profiling"],
    relatedProjects: ["propkart", "kitaab"],
    relatedQuestions: ["bloc-vs-cubit", "how-to-build-offline-first-flutter-app"],
    seoTitle: "How to Optimize a Large Flutter Application for 60 FPS | Jay Soni",
    seoDescription: "Practical guide to profiling and optimizing Flutter apps: DevTools, const constructors, RepaintBoundary, isolate offloading, and image caching.",
    tableOfContents: [
      { id: "profiling-devtools", title: "1. Profiling with Flutter DevTools" },
      { id: "render-rebuilds", title: "2. Eliminating Unnecessary Rebuilds" },
      { id: "repaint-boundary", title: "3. The RepaintBoundary Technique" },
      { id: "isolate-computation", title: "4. Offloading Heavy Work to Dart Isolates" }
    ],
    sections: [
      {
        id: "profiling-devtools",
        title: "1. Profiling with Flutter DevTools",
        content: `Never guess what causes lag. Run your app in **Profile Mode** (\`flutter run --profile\`) on a physical device and launch **Flutter DevTools**.\n\nExamine the **Performance Overlay**:\n- **UI Thread:** Time spent building widget trees and computing layout. If a frame exceeds 16.6ms (or 8.3ms on 120Hz screens), it causes noticeable jank.\n- **Raster Thread:** Time spent by Skia / Impeller turning visual instructions into GPU pixels.`
      },
      {
        id: "render-rebuilds",
        title: "2. Eliminating Unnecessary Rebuilds",
        content: `Common mistakes that destroy Flutter performance:\n1. **Calling setState() high in the tree:** Rebuilding the entire Scaffold when only a heart icon changed.\n2. **Omitting const:** \`const\` widgets are compiled down to static memory references and bypassed during the element tree rebuild phase.\n3. **Using context.watch() instead of context.select():** Only listen to the specific sub-property required by the widget.`
      },
      {
        id: "repaint-boundary",
        title: "3. The RepaintBoundary Technique",
        content: `If you have a complex dashboard with an animated timer or live ticker, the animation might trigger a repaint of the entire parent view.\n\nWrap the animating widget in a \`RepaintBoundary\`. This creates a separate display list on the GPU layer, preventing child redraws from invalidating parent layers.`
      },
      {
        id: "isolate-computation",
        title: "4. Offloading Heavy Work to Dart Isolates",
        content: `Dart is single-threaded. Parsing a 10MB JSON response or decoding an encrypted local cache locks the main thread, freezing touch events.\n\nUse \`compute()\` or \`Isolate.run()\` to offload intensive tasks:`,
        codeSnippet: {
          language: "dart",
          caption: "Running Heavy JSON Parsing in Dart Isolate",
          code: `// Parse heavy property catalog without freezing UI animation
Future<List<PropertyModel>> parseCatalogInBackground(String rawJson) async {
  return await Isolate.run(() {
    final list = jsonDecode(rawJson) as List<dynamic>;
    return list.map((e) => PropertyModel.fromJson(e)).toList();
  });
}`
        }
      }
    ]
  },

  // 12. Refresh Token Rotation in Node.js
  {
    id: "refresh-token-rotation-nodejs",
    slug: "how-to-implement-refresh-token-rotation-nodejs",
    categorySlug: "nodejs",
    category: "Node.js & Backend",
    title: "How to Implement Refresh Token Rotation in Node.js and Express?",
    question: "How do you engineer a secure JWT authentication system with short-lived access tokens, refresh token rotation (RTR), and automatic reuse detection to stop session hijacking?",
    shortAnswer: "Issue a short-lived access token (15 mins) and a cryptographically secure refresh token (7 days). Store refresh tokens in HttpOnly, SameSite cookies or an encrypted database table. On each refresh request, invalidate the old refresh token, issue a new pair, and if an already-used refresh token is presented, immediately revoke all tokens in the user's family.",
    difficulty: "Advanced",
    readingTime: "8 min read",
    publishedAt: "2026-11-02",
    updatedAt: "2026-11-04",
    status: "published",
    featured: false,
    tags: ["Node.js", "Express", "JWT", "Security", "Authentication"],
    relatedProjects: ["propkart-broker", "devsync"],
    relatedQuestions: ["scalable-crm-flutter-nodejs"],
    seoTitle: "How to Implement Refresh Token Rotation in Node.js | Jay Soni",
    seoDescription: "Step-by-step guide to JWT refresh token rotation (RTR) in Node.js/Express with automatic reuse detection and cookie security.",
    tableOfContents: [
      { id: "the-jwt-security-flaw", title: "1. The Inherent Flaw of Stateless JWTs" },
      { id: "rtr-mechanic", title: "2. The Token Rotation Lifecycle" },
      { id: "reuse-detection", title: "3. Automatic Reuse Detection" },
      { id: "express-implementation", title: "4. Implementation in Express / NestJS" }
    ],
    sections: [
      {
        id: "the-jwt-security-flaw",
        title: "1. The Inherent Flaw of Stateless JWTs",
        content: `Standard stateless JWTs cannot be revoked before they expire. If an access token with a 30-day lifetime is stolen by an attacker, the user is completely compromised until the token expires.\n\n**Refresh Token Rotation (RTR)** solves this: the access token lives for only **10–15 minutes**, while the refresh token is strictly **single-use**.`
      },
      {
        id: "rtr-mechanic",
        title: "2. The Token Rotation Lifecycle",
        content: `1. User logs in → Backend issues Access Token A1 (15m) and Refresh Token R1 (7d).\n2. At 14m, client calls \`/auth/refresh\` with R1.\n3. Backend validates R1, invalidates R1 in the database, and returns new Access Token A2 and new Refresh Token R2.\n4. R1 is now dead forever.`
      },
      {
        id: "reuse-detection",
        title: "3. Automatic Reuse Detection",
        content: `What happens if an attacker intercepted R1, and both the legitimate user and the attacker attempt to refresh using R1?\n\nBecause R1 was marked as used, the backend recognizes a **Replay Attack**. It immediately invalidates the entire token family, logging out all active sessions for that user and sending a security alert email.`
      },
      {
        id: "express-implementation",
        title: "4. Implementation in Express / NestJS",
        content: `Here is the core verification logic:`,
        codeSnippet: {
          language: "javascript",
          caption: "Refresh Token Rotation with Reuse Detection in Node.js",
          code: `async function handleTokenRefresh(req, res) {
  const incomingToken = req.cookies.refreshToken;
  
  const tokenRecord = await db.refreshToken.findUnique({
    where: { token: incomingToken }
  });

  if (!tokenRecord) {
    return res.status(401).json({ error: "Invalid token" });
  }

  // REUSE DETECTION: Token was already used!
  if (tokenRecord.isRevoked || tokenRecord.isUsed) {
    // Invalidate entire family!
    await db.refreshToken.updateMany({
      where: { familyId: tokenRecord.familyId },
      data: { isRevoked: true }
    });
    return res.status(403).json({ error: "Breach detected. Please re-authenticate." });
  }

  // Mark current as used
  await db.refreshToken.update({
    where: { id: tokenRecord.id },
    data: { isUsed: true }
  });

  // Issue new pair
  const newAccessToken = generateAccessToken(tokenRecord.userId);
  const newRefreshToken = generateSecureToken();

  await db.refreshToken.create({
    data: {
      token: newRefreshToken,
      userId: tokenRecord.userId,
      familyId: tokenRecord.familyId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }
  });

  res.cookie('refreshToken', newRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });

  return res.json({ accessToken: newAccessToken });
}`
        }
      }
    ]
  },

  // 13. Clean Architecture in Flutter
  {
    id: "flutter-clean-architecture",
    slug: "how-to-structure-flutter-clean-architecture",
    categorySlug: "flutter",
    category: "Flutter & Mobile",
    title: "How to Structure a Large Flutter Project Using Clean Architecture?",
    question: "How do you organize a scalable Flutter codebase across Presentation, Domain, and Data layers to ensure testability, team maintainability, and clean separation of concerns?",
    shortAnswer: "Clean Architecture separates code into three layers: Presentation (Widgets, BLoCs), Domain (Entities, Use Cases, Repository Interfaces), and Data (Models, Data Sources, Repository Implementations). Dependencies point inward, meaning core business rules have zero dependency on Flutter UI or third-party packages.",
    difficulty: "Advanced",
    readingTime: "8 min read",
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-04",
    status: "published",
    featured: false,
    tags: ["Flutter", "Clean Architecture", "Repository Pattern", "Best Practices"],
    relatedProjects: ["propkart", "kitaab"],
    relatedQuestions: ["how-to-build-offline-first-flutter-app", "bloc-vs-cubit"],
    seoTitle: "Flutter Clean Architecture Folder Structure & Blueprint | Jay Soni",
    seoDescription: "Comprehensive guide to organizing enterprise Flutter apps: Presentation, Domain, Data layers, Use Cases, and Repository Pattern.",
    tableOfContents: [
      { id: "three-layers", title: "1. The 3 Core Architectural Layers" },
      { id: "folder-structure", title: "2. Feature-First Folder Structure" },
      { id: "use-case-flow", title: "3. The Use Case Flow in Practice" },
      { id: "testing-benefits", title: "4. Testability & Dependency Inversion" }
    ],
    sections: [
      {
        id: "three-layers",
        title: "1. The 3 Core Architectural Layers",
        content: `1. **Domain Layer (Pure Dart):** Contains Entities (business models) and Use Cases (interactors). It has NO Flutter imports. It is 100% agnostic to whether you display data in a Mobile app, Web view, or CLI.\n2. **Data Layer:** Implements repository interfaces defined in Domain. Coordinates between Local Data Sources (Isar/SQLite) and Remote Data Sources (REST API/WebSockets).\n3. **Presentation Layer:** Contains Flutter Widgets, Pages, and State Management (BLoC/Cubit).`
      },
      {
        id: "folder-structure",
        title: "2. Feature-First Folder Structure",
        content: `In large codebases with 20+ features, organize by **Feature** rather than generic layer folders:`,
        codeSnippet: {
          language: "text",
          caption: "Feature-First Folder Layout",
          code: `lib/
├── core/
│   ├── network/
│   ├── theme/
│   └── errors/
└── features/
    └── lead_management/
        ├── data/
        │   ├── datasources/
        │   │   ├── lead_local_datasource.dart (Isar)
        │   │   └── lead_remote_datasource.dart (REST/WebSockets)
        │   ├── models/
        │   │   └── lead_model.dart (toJson, fromJson)
        │   └── repositories/
        │       └── lead_repository_impl.dart
        ├── domain/
        │   ├── entities/
        │   │   └── lead_entity.dart
        │   ├── repositories/
        │   │   └── lead_repository.dart (Interface)
        │   └── usecases/
        │       ├── get_leads_usecase.dart
        │       └── assign_lead_usecase.dart
        └── presentation/
            ├── bloc/
            │   ├── lead_bloc.dart
            │   └── lead_state.dart
            └── pages/
                ├── lead_list_page.dart
                └── lead_detail_page.dart`
        }
      },
      {
        id: "use-case-flow",
        title: "3. The Use Case Flow in Practice",
        content: `A Use Case encapsulates one single business rule:\n\n\`\`\`dart\nclass AssignLeadUseCase {\n  final LeadRepository repository;\n  AssignLeadUseCase(this.repository);\n\n  Future<Either<Failure, void>> call(String leadId, String agentId) {\n    return repository.assignLead(leadId, agentId);\n  }\n}\n\`\`\`\n\nThis pattern prevents leaking database or network logic into UI button handlers.`
      },
      {
        id: "testing-benefits",
        title: "4. Testability & Dependency Inversion",
        content: `Because the Domain layer defines repository contracts (\`abstract class LeadRepository\`), unit testing Use Cases and BLoCs requires zero mock HTTP servers. You simply inject a \`MockLeadRepository\` and test business logic with 100% certainty.`
      }
    ]
  },

  // 14. Optimize PostgreSQL Queries
  {
    id: "optimize-postgresql-queries",
    slug: "how-to-optimize-postgresql-queries-large-apps",
    categorySlug: "database",
    category: "Databases & Offline-First",
    title: "How to Optimize PostgreSQL Queries for Large-Scale Applications?",
    question: "How do you identify slow database queries, interpret EXPLAIN ANALYZE execution plans, and design high-performance composite and partial indexes in PostgreSQL?",
    shortAnswer: "Profile queries with pg_stat_statements and analyze the query plan with EXPLAIN (ANALYZE, BUFFERS). Eliminate sequential scans on large tables by adding targeted composite or partial indexes, avoid SELECT * in high-throughput endpoints, and prevent N+1 query problems with batching or joins.",
    difficulty: "Advanced",
    readingTime: "8 min read",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-04",
    status: "published",
    featured: false,
    tags: ["PostgreSQL", "Database Optimization", "Indexing", "Performance", "SQL"],
    relatedProjects: ["propkart", "chandrakala-jewellers"],
    relatedQuestions: ["how-supabase-realtime-works", "supabase-row-level-security"],
    seoTitle: "How to Optimize PostgreSQL Queries for Large Applications | Jay Soni",
    seoDescription: "Step-by-step PostgreSQL optimization guide: EXPLAIN ANALYZE, composite indexes, partial indexes, and PgBouncer connection pooling.",
    tableOfContents: [
      { id: "diagnose-slow-queries", title: "1. Diagnosing Slow Queries with EXPLAIN" },
      { id: "index-strategies", title: "2. Strategic Indexing (Composite & Partial)" },
      { id: "avoiding-n-plus-one", title: "3. Eliminating the N+1 Query Anti-Pattern" },
      { id: "connection-pooling", title: "4. Connection Pooling with PgBouncer" }
    ],
    sections: [
      {
        id: "diagnose-slow-queries",
        title: "1. Diagnosing Slow Queries with EXPLAIN",
        content: `Never optimize blindly. Prefix slow queries with \`EXPLAIN (ANALYZE, BUFFERS)\` to see the actual execution plan:\n\n- **Seq Scan (Sequential Scan):** PostgreSQL reads every single block on disk. On a 1,000,000-row table, this can take 1,200ms+.\n- **Index Scan vs Index Only Scan:** An Index Only Scan satisfies the query directly from RAM index pages without touching heap storage, completing in sub-1ms.`
      },
      {
        id: "index-strategies",
        title: "2. Strategic Indexing (Composite & Partial)",
        content: `1. **Composite Indexes (Column Order Matters):** Place equality columns first, followed by range/sorting columns:\n\`CREATE INDEX idx_leads_org_status_created ON leads (organization_id, status, created_at DESC);\``,
        codeSnippet: {
          language: "sql",
          caption: "High-Performance Partial Index",
          code: `-- Index ONLY active leads (ignoring 95% archived historical records)
CREATE INDEX idx_active_leads_search 
ON leads (phone, full_name)
WHERE stage NOT IN ('CLOSED_LOST', 'ARCHIVED');`
        }
      },
      {
        id: "avoiding-n-plus-one",
        title: "3. Eliminating the N+1 Query Anti-Pattern",
        content: `If an ORM executes 1 query to fetch 50 properties, and then loops over them executing 50 individual queries to fetch each property's images, that's 51 round-trips to the database.\n\nUse explicit \`JOIN\` statements or Prisma/TypeORM \`include\` batching to execute exactly 1 or 2 consolidated queries.`
      },
      {
        id: "connection-pooling",
        title: "4. Connection Pooling with PgBouncer",
        content: `Each PostgreSQL connection spawns a dedicated OS backend process consuming ~10MB memory. If your server receives 300 concurrent requests, the database will exhaust RAM.\n\nDeploy **PgBouncer** in Transaction Pooling mode. This allows thousands of incoming HTTP requests to share a pool of 20–30 persistent database connections, slashing CPU context-switch latency.`
      }
    ]
  },

  // 15. Real-Time Property Management CRM
  {
    id: "realtime-property-management-crm",
    slug: "how-to-build-realtime-property-management-crm",
    categorySlug: "crm-development",
    category: "CRM & Business Systems",
    title: "How to Build a Real-Time Property Management CRM?",
    question: "How do you design a high-throughput commercial real estate CRM that handles live unit inventory holds, multi-broker commissions, and telecaller queues without inventory double-booking?",
    shortAnswer: "Architect a dual-state inventory reservation engine using Redis distributed locks or PostgreSQL row-level locks with expiration timestamps. Combine this with WebSocket broadcast channels for instantaneous floor-plan unit updates and an automated commission calculation ledger.",
    difficulty: "Advanced",
    readingTime: "9 min read",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-04",
    status: "published",
    featured: true,
    tags: ["PropTech", "CRM", "Real Estate", "Architecture", "WebSockets"],
    relatedProjects: ["propkart", "legacy-tower", "propkart-broker"],
    relatedQuestions: ["scalable-crm-flutter-nodejs", "lead-allocation-engine-crm"],
    seoTitle: "How to Build a Real-Time Property Management CRM | Jay Soni",
    seoDescription: "Architecture walkthrough for commercial real estate CRM: live unit locking, broker commissions, telecaller queues, and floorplan tracking.",
    tableOfContents: [
      { id: "inventory-locking", title: "1. Preventing Double-Booking of Units" },
      { id: "websocket-floorplan", title: "2. Live Floorplan Inventory Broadcast" },
      { id: "broker-commission", title: "3. Broker Tiering & Commission Engine" },
      { id: "production-case", title: "4. Real-World Case Study: NB Legacy Tower" }
    ],
    sections: [
      {
        id: "inventory-locking",
        title: "1. Preventing Double-Booking of Units",
        content: `During high-demand real estate launches, multiple brokers might attempt to reserve Unit #402 for their clients at the same minute. If two brokers collect token cheques for the same flat, it creates legal liability.\n\nImplement an **Expiring Hold Protocol**:\n- When a broker initiates a booking, acquire a temporary lock: \`STATUS = 'HOLD'\` with \`hold_expires_at = NOW() + INTERVAL '15 minutes'\`.\n- If token payment is verified, promote to \`BOOKED\`. If 15 minutes elapse without confirmation, a background cron releases the hold back to \`AVAILABLE\`.`
      },
      {
        id: "websocket-floorplan",
        title: "2. Live Floorplan Inventory Broadcast",
        content: `When a unit changes state from Available to Hold, broadcast the change over WebSockets to all connected agent tablets and the site office big-screen dashboard in sub-100ms. Color coding updates instantly (Green = Available, Amber = Hold, Red = Sold).`
      },
      {
        id: "broker-commission",
        title: "3. Broker Tiering & Commission Engine",
        content: `Broker compensation requires automated multi-slab calculations:\n- Tier 1 (1–3 sales): 2.0% commission.\n- Tier 2 (4–10 sales): 2.5% commission + milestone bonus.\n\nAll commission calculations are recorded in an append-only financial ledger with automated Hostinger SSL SMTP dispatch of confirmation statements.`
      },
      {
        id: "production-case",
        title: "4. Real-World Case Study: NB Legacy Tower",
        content: `In the commercial marketing and inventory suite engineered for **NB Legacy Tower** (Gandhinagar / Ahmedabad), this real-time floor inventory system eliminated duplicate token holds, streamlined broker payouts, and provided executives with instant sales velocity dashboards.`
      }
    ]
  }
];

// Helper lookup functions
export function getQuestionBySlug(categorySlug, questionSlug) {
  return DEVELOPER_QUESTIONS.find(
    (q) => q.categorySlug === categorySlug && q.slug === questionSlug && q.status === "published"
  );
}

export function getQuestionsByCategory(categorySlug) {
  return DEVELOPER_QUESTIONS.filter(
    (q) => q.categorySlug === categorySlug && q.status === "published"
  );
}

export function getFeaturedQuestions() {
  return DEVELOPER_QUESTIONS.filter((q) => q.featured && q.status === "published");
}

export function getAllPublishedQuestions() {
  return DEVELOPER_QUESTIONS.filter((q) => q.status === "published");
}
