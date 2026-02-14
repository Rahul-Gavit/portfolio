<template>
  <section id="about" class="py-32 px-6 relative">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl lg:text-6xl font-black mb-4">
          <span
            class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
            >About Me</span
          >
        </h2>
        <p class="text-zinc-400 text-lg">Get to know who I am and what I do</p>
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
              I write maintainable, scalable code following best practices and
              modern design patterns. Quality over quantity, always.
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
              Constantly exploring new technologies and frameworks to stay ahead
              in the ever-evolving world of web development.
            </p>
          </div>
        </div>

        <div class="space-y-6">
          <div
            class="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"
          >
            <h3 class="text-2xl font-bold mb-4">My Journey</h3>
            <p class="text-zinc-300 leading-relaxed mb-4">
              I'm a passionate full-stack developer with expertise in modern web
              technologies. I love building things that make a difference and
              solving complex problems with elegant solutions.
            </p>
            <p class="text-zinc-300 leading-relaxed mb-4">
              With a strong foundation in Nuxt.js, Vue.js, and Node.js, I create
              performant, user-friendly applications that deliver exceptional
              experiences.
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
                50+
              </div>
              <div class="text-zinc-400 text-sm">Projects</div>
            </div>
            <div
              class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <div
                class="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2"
              >
                3+
              </div>
              <div class="text-zinc-400 text-sm">Years Exp</div>
            </div>
            <div
              class="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <div
                class="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2"
              >
                40+
              </div>
              <div class="text-zinc-400 text-sm">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
