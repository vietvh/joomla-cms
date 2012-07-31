/**
 * @copyright	Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */

// Only define the Joomla namespace if not defined.
if (typeof(JoomlaCMS) === 'undefined') {
    var JoomlaCMS = {};
}

/**
 * Render messages send via JSON
 *
 * @param	object	messages	JavaScript object containing the messages to render
 * @return	void
 */
JoomlaCMS.renderMessages = function(messages) {
    Joomla.removeMessages();
    var container = document.id('system-message-container');

    Object.each(messages, function (item, type) {
        var alert = '';

        if (type == 'warning')
            alert = 'alert-error';
        else if (type == 'message')
            alert = 'alert-success';
        else if (type == 'notice')
            alert = 'alert-info';

        var div = new Element('div', {
            'class': 'alert ' + alert
        });
        div.inject(container);
        var h4 = new Element('h4', {
            'class' : 'alert-heading',
            html: Joomla.JText._(type)
        });
        h4.inject(div);
        var divList = new Element('div');
        Array.each(item, function (item, index, object) {
            var p = new Element('p', {
                html: item
            });
            p.inject(divList);
        }, this);
        divList.inject(div);
    }, this);
};