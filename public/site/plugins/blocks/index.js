panel.plugin("eqtrd/blocks", {
  // example in the Vue component of a custom field
  blocks: {
    accordion: `
      <div type="button" @click="open">
         <p>{{ content.eventTitle }}</p>
      </div>
    `,
    event: {
      computed: {
        eventStart() {
          if(this.content.eventstart){
            return this.$library.dayjs(this.content.eventstart).format("DD.MM.YYYY");
          }
        },
        eventEnd() {
          if(this.content.eventend) {
            return this.$library.dayjs(this.content.eventend).format("DD.MM.YYYY");
          }
        },
      },
      template: `
      <div type="button" @click="open">
         <div>{{ content.title }} | {{ content.eventplace}}</div>
         <div class="dates"> <span class="event-start">{{ eventStart }}</span> <span class="event-end">{{eventEnd}}</span></div>
      </div>
    `
    }
  }
});
