<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 -z-10">
      <div
        class="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
      ></div>
      <div
        class="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnptMCAzMmgtMnYyaDJ2LTJ6bTAtMTRhMSAxIDAgMCAwIDAgMiAyIDIgMCAxIDAgMC0yem0wLTE2YTEgMSAwIDAgMCAwIDIgMiAyIDAgMSAwIDAtMnptMC0xNmExIDEgMCAwIDAgMCAyIDIgMiAwIDEgMCAwLTJ6bTAtMTZhMSAxIDAgMCAwIDAgMiAyIDIgMCAxIDAgMC0yem0wLTE2YTEgMSAwIDAgMCAwIDIgMiAyIDAgMSAwIDAtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"
      ></div>
    </div>

    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/50"
    >
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div
              class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-bold text-lg"
            >
              D
            </div>
            <span
              class="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
              >Dev</span
            >
          </div>
          <div class="flex items-center gap-8">
            <a
              href="#about"
              class="text-zinc-400 hover:text-zinc-100 transition-colors"
              >About</a
            >
            <a
              href="#projects"
              class="text-zinc-400 hover:text-zinc-100 transition-colors"
              >Projects</a
            >
            <a
              href="#skills"
              class="text-zinc-400 hover:text-zinc-100 transition-colors"
              >Skills</a
            >
            <a
              href="#contact"
              class="text-zinc-400 hover:text-zinc-100 transition-colors"
              >Contact</a
            >
            <UButton color="primary" variant="solid" size="md">
              <Icon name="heroicons:arrow-down-tray" class="w-4 h-4 mr-2" />
              Resume
            </UButton>
          </div>
        </div>
      </div>
    </nav>

    <main class="pt-20">
      <!-- Hero Section -->
      <section
        class="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div class="max-w-7xl w-full">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8 animate-fade-in">
              <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"
              >
                <div
                  class="w-2 h-2 rounded-full bg-green-500 animate-pulse"
                ></div>
                <span class="text-sm text-zinc-300">Available for work</span>
              </div>

              <div class="space-y-4">
                <h1 class="text-6xl lg:text-8xl font-black tracking-tight">
                  <span
                    class="block text-zinc-100"
                    style="animation: slideUp 0.8s ease-out"
                    >Hi, I'm</span
                  >
                  <span
                    class="block bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent animate-gradient"
                    style="
                      animation:
                        slideUp 0.8s ease-out 0.2s both,
                        gradient 8s linear infinite;
                      background-size: 200% auto;
                    "
                  >
                    Rahul Gavit
                  </span>
                </h1>
                <p
                  class="text-2xl text-zinc-400 max-w-xl"
                  style="animation: slideUp 0.8s ease-out 0.4s both"
                >
                  Full-stack developer crafting exceptional digital experiences
                  with modern web technologies
                </p>
              </div>

              <div
                class="flex flex-wrap gap-4"
                style="animation: slideUp 0.8s ease-out 0.6s both"
              >
                <UButton size="xl" color="primary">
                  <Icon
                    name="heroicons:chat-bubble-left-right"
                    class="w-5 h-5 mr-2"
                  />
                  Let's Talk
                </UButton>
                <UButton size="xl" color="gray" variant="outline">
                  <Icon name="heroicons:eye" class="w-5 h-5 mr-2" />
                  View Projects
                </UButton>
              </div>

              <div
                class="flex items-center gap-4 pt-4"
                style="animation: slideUp 0.8s ease-out 0.8s both"
              >
                <a
                  href="itsmerahulgavit@gmail.com"
                  class="w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                >
                  <Icon name="heroicons:envelope" class="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Rahul-Gavit"
                  class="w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rahulgavit"
                  class="w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              class="relative lg:block hidden"
              style="animation: fadeIn 1s ease-out 0.4s both"
            >
              <div class="relative w-full h-[600px]">
                <!-- Decorative Elements -->
                <div
                  class="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                ></div>
                <div
                  class="absolute bottom-10 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
                  style="animation-delay: 1.5s"
                ></div>

                <!-- Profile Card -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="relative w-96 h-96 rounded-3xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 backdrop-blur-xl p-8 hover:scale-105 transition-transform duration-500"
                  >
                    <div
                      class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    ></div>
                    <div
                      class="relative z-10 h-full flex flex-col items-center justify-center"
                    >
                      <div
                        class="w-48 h-48 rounded-full bg-gradient-to-br from-white to-blue-500 p-1 mb-6"
                      >
                        <img
                          src="/assets/Rahul.jpg"
                          alt="Profile Picture"
                          class="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-6xl font-bold"
                        />
                        <!-- <div
                          class="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-6xl font-bold"
                        >
                          👨‍💻
                        </div> -->
                      </div>
                      <div class="text-center space-y-2">
                        <h3 class="text-2xl font-bold">Software Developer</h3>
                        <p class="text-zinc-400">React.js • Vue.js • Node.js</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-32 px-6 relative">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-5xl lg:text-6xl font-black mb-4">
              <span
                class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
                >About Me</span
              >
            </h2>
            <p class="text-zinc-400 text-lg">
              Get to know who I am and what I do
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <div
                class="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon
                    name="heroicons:code-bracket"
                    class="w-6 h-6 text-blue-400"
                  />
                </div>
                <h3 class="text-2xl font-bold mb-3">Clean Code Enthusiast</h3>
                <p class="text-zinc-400 leading-relaxed">
                  I write maintainable, scalable code following best practices
                  and modern design patterns. Quality over quantity, always.
                </p>
              </div>

              <div
                class="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300 group"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon
                    name="heroicons:rocket-launch"
                    class="w-6 h-6 text-violet-400"
                  />
                </div>
                <h3 class="text-2xl font-bold mb-3">Fast Learner</h3>
                <p class="text-zinc-400 leading-relaxed">
                  Constantly exploring new technologies and frameworks to stay
                  ahead in the ever-evolving world of web development.
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <div
                class="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"
              >
                <h3 class="text-2xl font-bold mb-4">My Journey</h3>
                <p class="text-zinc-300 leading-relaxed mb-4">
                  I'm a passionate full-stack developer with expertise in modern
                  web technologies. I love building things that make a
                  difference and solving complex problems with elegant
                  solutions.
                </p>
                <p class="text-zinc-300 leading-relaxed mb-4">
                  With a strong foundation in Nuxt.js, Vue.js, and Node.js, I
                  create performant, user-friendly applications that deliver
                  exceptional experiences.
                </p>
                <div class="flex flex-wrap gap-2 pt-4">
                  <span
                    class="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                    >JavaScript</span
                  >
                  <span
                    class="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm"
                    >TypeScript</span
                  >
                  <span
                    class="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                    >React.js</span
                  >
                  <span
                    class="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm"
                    >Next.js</span
                  >
                  <span
                    class="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                    >Vue.js</span
                  >
                  <span
                    class="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm"
                    >Nuxt.js</span
                  >
                  <span
                    class="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                    >Node.js</span
                  >
                  <span
                    class="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm"
                    >MongoDB</span
                  >
                  <span
                    class="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                    >PostgreSQL</span
                  >
                  <span
                    class="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm"
                    >Tailwind CSS</span
                  >
                </div>
              </div>

              <div class="grid grid-cols-3 gap-4">
                <div
                  class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div
                    class="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2"
                  >
                    20+
                  </div>
                  <div class="text-zinc-400 text-sm">Projects</div>
                </div>
                <div
                  class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div
                    class="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2"
                  >
                    1
                  </div>
                  <div class="text-zinc-400 text-sm">Years Exp</div>
                </div>
                <div
                  class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div
                    class="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2"
                  >
                    30+
                  </div>
                  <div class="text-zinc-400 text-sm">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-32 px-6 relative">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-5xl lg:text-6xl font-black mb-4">
              <span
                class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
                >Work Experience</span
              >
            </h2>
            <p class="text-zinc-400 text-lg">
              My professional journey and career highlights
            </p>
          </div>

          <div class="max-w-4xl mx-auto">
            <!-- Timeline -->
            <div class="relative">
              <!-- Vertical Line -->
              <div
                class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-blue-500 hidden md:block"
              ></div>

              <!-- Experience Items -->
              <div class="space-y-12">
                <!-- Experience 1 -->
                <div class="relative pl-0 md:pl-24">
                  <!-- Timeline Dot -->
                  <div
                    class="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 border-4 border-zinc-950 hidden md:block animate-pulse"
                  ></div>

                  <div
                    class="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div
                      class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4"
                    >
                      <div>
                        <h3
                          class="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
                        >
                          Senior Full-Stack Developer
                        </h3>
                        <div class="flex items-center gap-2 text-zinc-400 mb-2">
                          <Icon
                            name="heroicons:building-office"
                            class="w-5 h-5"
                          />
                          <span class="font-medium">Tech Company Inc.</span>
                        </div>
                        <div class="flex items-center gap-2 text-zinc-400">
                          <Icon name="heroicons:map-pin" class="w-5 h-5" />
                          <span>San Francisco, CA (Remote)</span>
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium whitespace-nowrap"
                      >
                        <Icon name="heroicons:calendar" class="w-4 h-4" />
                        2022 - Present
                      </div>
                    </div>

                    <ul class="space-y-3 text-zinc-300">
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Led development of a microservices architecture
                          serving 100K+ daily active users</span
                        >
                      </li>
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Implemented CI/CD pipelines reducing deployment time
                          by 60%</span
                        >
                      </li>
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Mentored junior developers and conducted code
                          reviews</span
                        >
                      </li>
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Built real-time dashboards using Vue.js and WebSocket
                          technology</span
                        >
                      </li>
                    </ul>

                    <div class="flex flex-wrap gap-2 mt-6">
                      <span
                        class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                        >Nuxt.js</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                        >Node.js</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                        >PostgreSQL</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                        >Docker</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                        >AWS</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Experience 2 -->
                <div class="relative pl-0 md:pl-24">
                  <!-- Timeline Dot -->
                  <div
                    class="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 border-4 border-zinc-950 hidden md:block"
                  ></div>

                  <div
                    class="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div
                      class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4"
                    >
                      <div>
                        <h3
                          class="text-2xl font-bold mb-2 group-hover:text-violet-400 transition-colors"
                        >
                          Full-Stack Developer
                        </h3>
                        <div class="flex items-center gap-2 text-zinc-400 mb-2">
                          <Icon
                            name="heroicons:building-office"
                            class="w-5 h-5"
                          />
                          <span class="font-medium"
                            >Digital Solutions Ltd.</span
                          >
                        </div>
                        <div class="flex items-center gap-2 text-zinc-400">
                          <Icon name="heroicons:map-pin" class="w-5 h-5" />
                          <span>New York, NY</span>
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium whitespace-nowrap"
                      >
                        <Icon name="heroicons:calendar" class="w-4 h-4" />
                        2020 - 2022
                      </div>
                    </div>

                    <ul class="space-y-3 text-zinc-300">
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Developed 15+ responsive web applications for diverse
                          clients</span
                        >
                      </li>
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Optimized application performance improving load
                          times by 40%</span
                        >
                      </li>
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Collaborated with design team to implement
                          pixel-perfect UI/UX</span
                        >
                      </li>
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Integrated third-party APIs including payment
                          gateways and analytics</span
                        >
                      </li>
                    </ul>

                    <div class="flex flex-wrap gap-2 mt-6">
                      <span
                        class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                        >Vue.js</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                        >Express.js</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                        >MongoDB</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                        >Tailwind CSS</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                        >Git</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Experience 3 -->
                <div class="relative pl-0 md:pl-24">
                  <!-- Timeline Dot -->
                  <div
                    class="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 border-4 border-zinc-950 hidden md:block"
                  ></div>

                  <div
                    class="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div
                      class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4"
                    >
                      <div>
                        <h3
                          class="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
                        >
                          Junior Web Developer
                        </h3>
                        <div class="flex items-center gap-2 text-zinc-400 mb-2">
                          <Icon
                            name="heroicons:building-office"
                            class="w-5 h-5"
                          />
                          <span class="font-medium">StartUp Innovators</span>
                        </div>
                        <div class="flex items-center gap-2 text-zinc-400">
                          <Icon name="heroicons:map-pin" class="w-5 h-5" />
                          <span>Austin, TX</span>
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium whitespace-nowrap"
                      >
                        <Icon name="heroicons:calendar" class="w-4 h-4" />
                        2019 - 2020
                      </div>
                    </div>

                    <ul class="space-y-3 text-zinc-300">
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Built and maintained responsive landing pages and
                          marketing websites</span
                        >
                      </li>
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Assisted in database design and RESTful API
                          development</span
                        >
                      </li>
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Participated in agile sprint planning and daily
                          stand-ups</span
                        >
                      </li>
                      <li class="flex items-start gap-3">
                        <div
                          class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"
                        ></div>
                        <span
                          >Learned modern development practices and version
                          control workflows</span
                        >
                      </li>
                    </ul>

                    <div class="flex flex-wrap gap-2 mt-6">
                      <span
                        class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                        >HTML/CSS</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                        >JavaScript</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                        >React</span
                      >
                      <span
                        class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                        >MySQL</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Download Resume CTA -->
            <div class="mt-16 text-center">
              <div
                class="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"
              >
                <h3 class="text-2xl font-bold mb-3">Want to know more?</h3>
                <p class="text-zinc-400 mb-6">
                  Download my complete resume for detailed information about my
                  experience and skills
                </p>
                <UButton size="xl" color="primary">
                  <Icon name="heroicons:arrow-down-tray" class="w-5 h-5 mr-2" />
                  Download Full Resume
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-32 px-6 relative">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-5xl lg:text-6xl font-black mb-4">
              <span
                class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
                >Featured Projects</span
              >
            </h2>
            <p class="text-zinc-400 text-lg">
              Some of my recent work that I'm proud of
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Project Card 1 -->
            <div
              class="group relative rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div class="relative p-6">
                <div
                  class="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 mb-6 flex items-center justify-center overflow-hidden"
                >
                  <Icon
                    name="heroicons:shopping-cart"
                    class="w-20 h-20 text-blue-400 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3
                  class="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors"
                >
                  E-Commerce Platform
                </h3>
                <p class="text-zinc-400 mb-4 leading-relaxed">
                  A full-featured e-commerce platform with real-time inventory,
                  payment integration, and admin dashboard.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                    >Nuxt.js</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                    >Stripe</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                    >MongoDB</span
                  >
                </div>
                <div class="flex gap-4">
                  <UButton color="primary" variant="soft" size="sm" block>
                    <Icon name="heroicons:eye" class="w-4 h-4 mr-2" />
                    View Demo
                  </UButton>
                  <UButton color="gray" variant="ghost" size="sm">
                    <Icon name="heroicons:code-bracket" class="w-4 h-4" />
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Project Card 2 -->
            <div
              class="group relative rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:scale-105"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div class="relative p-6">
                <div
                  class="aspect-video rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 mb-6 flex items-center justify-center overflow-hidden"
                >
                  <Icon
                    name="heroicons:chart-bar"
                    class="w-20 h-20 text-violet-400 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3
                  class="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors"
                >
                  Analytics Dashboard
                </h3>
                <p class="text-zinc-400 mb-4 leading-relaxed">
                  Real-time analytics dashboard with beautiful charts, data
                  visualization, and export capabilities.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                    >Vue.js</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                    >Chart.js</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                    >Firebase</span
                  >
                </div>
                <div class="flex gap-4">
                  <UButton color="primary" variant="soft" size="sm" block>
                    <Icon name="heroicons:eye" class="w-4 h-4 mr-2" />
                    View Demo
                  </UButton>
                  <UButton color="gray" variant="ghost" size="sm">
                    <Icon name="heroicons:code-bracket" class="w-4 h-4" />
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Project Card 3 -->
            <div
              class="group relative rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div class="relative p-6">
                <div
                  class="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 mb-6 flex items-center justify-center overflow-hidden"
                >
                  <Icon
                    name="heroicons:chat-bubble-left-right"
                    class="w-20 h-20 text-blue-400 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3
                  class="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors"
                >
                  Chat Application
                </h3>
                <p class="text-zinc-400 mb-4 leading-relaxed">
                  Real-time chat application with rooms, direct messages, file
                  sharing, and typing indicators.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                    >Nuxt.js</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs"
                    >Socket.io</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                    >Node.js</span
                  >
                </div>
                <div class="flex gap-4">
                  <UButton color="primary" variant="soft" size="sm" block>
                    <Icon name="heroicons:eye" class="w-4 h-4 mr-2" />
                    View Demo
                  </UButton>
                  <UButton color="gray" variant="ghost" size="sm">
                    <Icon name="heroicons:code-bracket" class="w-4 h-4" />
                  </UButton>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <UButton size="lg" color="gray" variant="outline">
              View All Projects
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
            </UButton>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-32 px-6 relative">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-5xl lg:text-6xl font-black mb-4">
              <span
                class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
                >Skills & Technologies</span
              >
            </h2>
            <p class="text-zinc-400 text-lg">
              Tools and technologies I work with
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              class="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <Icon
                name="heroicons:code-bracket"
                class="w-12 h-12 text-blue-400 mb-4"
              />
              <h3 class="text-xl font-bold mb-4">Frontend</h3>
              <ul class="space-y-2 text-zinc-400">
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Vue.js / Nuxt.js
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  React / Next.js
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Tailwind CSS
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  TypeScript
                </li>
              </ul>
            </div>

            <div
              class="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
            >
              <Icon
                name="heroicons:server"
                class="w-12 h-12 text-violet-400 mb-4"
              />
              <h3 class="text-xl font-bold mb-4">Backend</h3>
              <ul class="space-y-2 text-zinc-400">
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  Node.js / Express
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  PostgreSQL / MongoDB
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  REST APIs / GraphQL
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  Authentication
                </li>
              </ul>
            </div>

            <div
              class="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <Icon
                name="heroicons:wrench-screwdriver"
                class="w-12 h-12 text-blue-400 mb-4"
              />
              <h3 class="text-xl font-bold mb-4">Tools</h3>
              <ul class="space-y-2 text-zinc-400">
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Git / GitHub
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Docker
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  VS Code
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Figma
                </li>
              </ul>
            </div>

            <div
              class="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
            >
              <Icon
                name="heroicons:cloud"
                class="w-12 h-12 text-violet-400 mb-4"
              />
              <h3 class="text-xl font-bold mb-4">Deployment</h3>
              <ul class="space-y-2 text-zinc-400">
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  Vercel / Netlify
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  AWS / GCP
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  CI/CD Pipelines
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                  Linux Servers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-32 px-6 relative">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-5xl lg:text-6xl font-black mb-4">
              <span
                class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
                >Let's Work Together</span
              >
            </h2>
            <p class="text-zinc-400 text-lg">
              Have a project in mind? Let's make it happen!
            </p>
          </div>

          <div
            class="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
          >
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    class="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    class="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  class="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="6"
                  class="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <UButton size="xl" color="primary" block>
                <Icon name="heroicons:paper-airplane" class="w-5 h-5 mr-2" />
                Send Message
              </UButton>
            </form>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mt-12">
            <div
              class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <Icon
                name="heroicons:envelope"
                class="w-8 h-8 text-blue-400 mx-auto mb-3"
              />
              <h3 class="font-bold mb-1">Email</h3>
              <p class="text-zinc-400 text-sm">hello@developer.com</p>
            </div>
            <div
              class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm text-center hover:border-violet-500/50 transition-all duration-300"
            >
              <Icon
                name="heroicons:map-pin"
                class="w-8 h-8 text-violet-400 mx-auto mb-3"
              />
              <h3 class="font-bold mb-1">Location</h3>
              <p class="text-zinc-400 text-sm">Your City, Country</p>
            </div>
            <div
              class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <Icon
                name="heroicons:clock"
                class="w-8 h-8 text-blue-400 mx-auto mb-3"
              />
              <h3 class="font-bold mb-1">Availability</h3>
              <p class="text-zinc-400 text-sm">Open for opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-12 px-6 border-t border-zinc-800/50">
        <div class="max-w-7xl mx-auto">
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div class="flex items-center gap-2">
              <div
                class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-bold text-lg"
              >
                D
              </div>
              <span
                class="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
                >Dev</span
              >
            </div>
            <p class="text-zinc-400 text-sm">
              © 2024 All rights reserved. Built with 💙 using Nuxt.js
            </p>
            <div class="flex items-center gap-4">
              <a
                href="#"
                class="text-zinc-400 hover:text-zinc-100 transition-colors"
                >Privacy</a
              >
              <a
                href="#"
                class="text-zinc-400 hover:text-zinc-100 transition-colors"
                >Terms</a
              >
            </div>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
// Add any custom logic here
</script>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #18181b;
}

::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #52525b;
}
</style>
