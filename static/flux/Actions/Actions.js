/**
 * Created by katakonst on 3/12/16.
 */



var SoundActions = {

    /**
     * @param  {string} text
     */


    match: function (text) {

        AppDispatcher.dispatch({
            actionType: "match2",
            text: text
        });
    },







}