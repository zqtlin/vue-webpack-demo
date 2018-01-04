<template>
	<ul class="list">
      <li v-for="item in lists" v-text="item.title"></li>
    </ul>
</template>

<script>
export default{
	data() {
		return {
			lists: []
		}
	},
	created() {
		this.getData()
	},
	methods:{
		getData: function(params) {
			var v = this
			if(!params)params={}
			v.$api.get('topics', params, function(r) {
        		v.lists = r.data
      		})
		}
	}
}
</script>
